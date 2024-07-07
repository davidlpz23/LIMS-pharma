
import React, { useState } from 'react';
// importar axios para realizar peticiones HTTP
import axios from 'axios';
// importar el servicio de autenticación para realizar la autenticación de los usuarios 
import AuthService from '../services/AuthService';

// componente para registrar un reactivo                   
  const ReagentRegister = () => {
  const [name, setName] = useState('');
  const [batchNumber, setBatchNumber] = useState('');
  const [receptionDate, setReceptionDate] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [storageConditions, setStorageConditions] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');

 
  // función para manejar el envío del formulario de registro de un reactivo
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = AuthService.getCurrentUser();
    if (!user) {
      setMessage('Please log in');
      return;
    }

    
    // obtener el token de autenticación del usuario actualmente autenticado      
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/reagents/register`, {
        name,
        batchNumber,
        receptionDate,
        expirationDate,
        storageConditions,
        quantity,
      },  
      // enviar el token de autenticación en la cabecera de la petición HTTP para autenticar al usuario    
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        }
      });
    // mostrar un mensaje de éxito si el reactivo se registra correctamente
      setMessage('Reagent registered successfully');
      console.log(response.data);
    // mostrar un mensaje de error si falla el registro del reactivo
    } catch (err) {
      setMessage('Failed to register reagent');
      console.error(err);
    }
  };


  
// formulario de registro de un reactivo con campos de entrada para el nombre, número de lote, fecha de recepción, fecha de vencimiento, condiciones de almacenamiento y cantidad
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
