// frontend/src/components/ReagentList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReagentList = () => {
  const [reagents, setReagents] = useState([]);
  const [query, setQuery] = useState('');
  const [strategy, setStrategy] = useState('name');
  const [message, setMessage] = useState('');

  const fetchReagents = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/reagents`);
      setReagents(response.data);
    } catch (err) {
      setMessage('Failed to fetch reagents');
      console.error(err);
    }
  };

  const searchReagents = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/reagents/search`, {
        params: { query, strategy },
      });
      setReagents(response.data);
    } catch (err) {
      setMessage('Failed to search reagents');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchReagents();
  }, []);

  return (
    <div className="container">
      <h2>Reagent List</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="form-control mt-2"
          value={strategy}
          onChange={(e) => setStrategy(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="batchNumber">Batch Number</option>
        </select>
        <button className="btn btn-primary mt-2" onClick={searchReagents}>Search</button>
      </div>
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
            <p>Alert: {reagent.alert}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReagentList;
