// frontend/src/components/SampleRegister.js
import React, { useState } from 'react';
import axios from 'axios';

const SampleRegister = () => {
  const [productName, setProductName] = useState('');
  const [batchNumber, setBatchNumber] = useState('');
  const [receptionDate, setReceptionDate] = useState('');
  const [uniqueId, setUniqueId] = useState('');
  const [details, setDetails] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/samples/register`, {
        productName,
        batchNumber,
        receptionDate,
        uniqueId,
        details,
      });
      setMessage('Sample registered successfully');
      console.log(response.data);
    } catch (err) {
      setMessage('Failed to register sample');
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2>Register Sample</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
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
          <label className="form-label">Unique ID</label>
          <input
            type="text"
            className="form-control"
            value={uniqueId}
            onChange={(e) => setUniqueId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Details</label>
          <textarea
            className="form-control"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        </div>
        {message && <div className="alert alert-info">{message}</div>}
        <button type="submit" className="btn btn-primary">Register Sample</button>
      </form>
    </div>
  );
};

export default SampleRegister;
