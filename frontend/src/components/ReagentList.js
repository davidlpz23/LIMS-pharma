
import React, { useState, useEffect } from 'react';
// importar axios para realizar peticiones HTTP
import axios from 'axios';

// componente para mostrar la lista de reactivos
const ReagentList = () => {
  const [reagents, setReagents] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchReagents = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/reagents`);
        setReagents(response.data);
      } catch (err) {
        setMessage('Failed to fetch reagents');
        console.error(err);
      }
    };
    fetchReagents();
  }, []);

  // lista de reactivos
  return (
    <div className="container">
      <h2>Reagent List</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <ul className="list-group">
        {reagents.map((reagent) => (
          <li key={reagent.id} className="list-group-item">
            <h5>{reagent.name}</h5>
            <p>Batch Number: {reagent.batchNumber}</p>
            <p>Reception Date: {new Date(reagent.receptionDate).toLocaleDateString()}</p>
            <p>Expiration Date: {new Date(reagent.expirationDate).toLocaleDateString()}</p>
            <p>Storage Conditions: {reagent.storageConditions}</p>
            <p>Quantity: {reagent.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReagentList;
