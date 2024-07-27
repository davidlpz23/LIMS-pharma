// ReagentRegister.js
import React, { useState } from 'react';
import api from '../services/api';
import AuthService from '../services/AuthService';

const ReagentRegister = () => {
  const [name, setName] = useState('');
  const [batchNumber, setBatchNumber] = useState('');
  const [receptionDate, setReceptionDate] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [storageConditions, setStorageConditions] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = AuthService.getCurrentUser();
    if (!user) {
      setMessage('Please log in');
      return;
    }

    try {
      const response = await api.post('/reagents/register', {
        name,
        batchNumber,
        receptionDate,
        expirationDate,
        storageConditions,
        quantity,
      });

      setMessage('Reagent registered successfully');
      console.log(response.data);
    } catch (err) {
      setMessage('Failed to register reagent');
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2>Register Reagent</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Batch Number</label>
          <input
            type="text"
            className="form-control"
            value={batchNumber}
            onChange={(e) => setBatchNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Reception Date</label>
          <input
            type="date"
            className="form-control"
            value={receptionDate}
            onChange={(e) => setReceptionDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Expiration Date</label>
          <input
            type="date"
            className="form-control"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Storage Conditions</label>
          <input
            type="text"
            className="form-control"
            value={storageConditions}
            onChange={(e) => setStorageConditions(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input
            type="number"
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        {message && <div className="alert alert-info">{message}</div>}
        <button type="submit" className="btn btn-primary">Register Reagent</button>
      </form>
    </div>
  );
};

export default ReagentRegister;
