import React, { useState, useEffect } from 'react';
import api from '../services/api';
import AuthService from '../services/AuthService';

const SampleRegister = () => {
  const [samples, setSamples] = useState([]);
  const [productName, setProductName] = useState('');
  const [batchNumber, setBatchNumber] = useState('');
  const [receptionDate, setReceptionDate] = useState('');
  const [uniqueId, setUniqueId] = useState('');
  const [details, setDetails] = useState('');
  const [message, setMessage] = useState('');
  const [editingId, setEditingId] = useState(null);

  // Fetch samples when component mounts
  useEffect(() => {
    const fetchSamples = async () => {
      try {
        const response = await api.get('/samples');
        setSamples(response.data);
      } catch (err) {
        setMessage('Failed to fetch samples');
        console.error(err);
      }
    };

    fetchSamples();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = AuthService.getCurrentUser();
    if (!user) {
      setMessage('Please log in');
      return;
    }

    const sample = { productName, batchNumber, receptionDate, uniqueId, details };
    try {
      let response;
      if (editingId) {
        // Update sample
        response = await api.put(`/samples/${editingId}`, sample);
        setSamples(samples.map(s => (s.id === editingId ? response.data : s)));
        setMessage('Sample updated successfully');
      } else {
        // Register new sample
        response = await api.post('/samples/register', sample);
        setSamples([...samples, response.data]);
        setMessage('Sample registered successfully');
      }
      // Reset form fields
      setProductName('');
      setBatchNumber('');
      setReceptionDate('');
      setUniqueId('');
      setDetails('');
      setEditingId(null);
    } catch (err) {
      setMessage('Failed to register/update sample');
      console.error(err);
    }
  };

  const handleEdit = (sample) => {
    setProductName(sample.productName);
    setBatchNumber(sample.batchNumber);
    setReceptionDate(sample.receptionDate);
    setUniqueId(sample.uniqueId);
    setDetails(sample.details);
    setEditingId(sample.id);
  };

  const handleDelete = async (id) => {
    const user = AuthService.getCurrentUser();
    if (!user) {
      setMessage('Please log in');
      return;
    }

    try {
      await api.delete(`/samples/${id}`);
      setSamples(samples.filter(sample => sample.id !== id));
      setMessage('Sample deleted successfully');
    } catch (err) {
      setMessage('Failed to delete sample');
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
        <button type="submit" className="btn btn-primary">{editingId ? 'Update' : 'Register'}</button>
      </form>

      <h2 className="mt-5">Sample List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Batch Number</th>
            <th>Reception Date</th>
            <th>Unique ID</th>
            <th>Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {samples.map((sample) => (
            <tr key={sample.id}>
              <td>{sample.productName}</td>
              <td>{sample.batchNumber}</td>
              <td>{new Date(sample.receptionDate).toLocaleDateString()}</td>
              <td>{sample.uniqueId}</td>
              <td>{sample.details}</td>
              <td>
                <button className="btn btn-warning btn-sm" onClick={() => handleEdit(sample)}>Editar</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(sample.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SampleRegister;
