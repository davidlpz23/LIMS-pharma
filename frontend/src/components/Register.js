import React, { useState } from 'react';
// importar el servicio de autenticación para realizar el registro de los usuarios.
import AuthService from '../services/AuthService';

// Componente funcional para la página de registro.
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Función para manejar el envío del formulario de registro.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.register(username, password, email);
      window.location.reload();
    } catch (err) {
      setMessage('Registration failed');
      console.error(err);
    }
  };

  // Formulario de registro con campos de entrada para el nombre de usuario, la contraseña y el correo electrónico.
  return (
    // Contenedor principal de la página de registro.
    <div className="container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        
    
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        
        {message && <div className="alert alert-danger">{message}</div>}
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
