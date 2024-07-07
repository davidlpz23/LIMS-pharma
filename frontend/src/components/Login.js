import React, { useState } from 'react';
//        Importar el componente Link para navegar entre las páginas de la aplicación.
import { Link, useNavigate } from 'react-router-dom';
// importar el servicio de autenticación para realizar la autenticación de los usuarios.      
import AuthService from '../services/AuthService';


// Componente funcional para la página de inicio de sesión.     
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // inicializar el hook de navegación para redirigir a la página de registro de muestras después de iniciar sesión.    

  // Función para manejar el envío del formulario de inicio de sesión.          
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(username, password);
      navigate('/sample-register'); // Redirigir a la página de registro de muestras después de iniciar sesión.
    } catch (err) {
      setMessage('Usuario o contraseña incorrectos inténtelo de nuevo o Regístrese.');
      console.error(err);
    }
  };


  // Formulario de inicio de sesión con campos de entrada para el nombre de usuario y la contraseña.           
  return (
    
    // Contenedor principal de la página de inicio de sesión.
    <div className="container">
      <h2>Login</h2>
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
        
          
        {message && <div className="alert alert-danger">{message}</div>}
        <button type="submit" className="btn btn-primary">Login</button>
     
        <div className="mt-3">
          <span>Aún no tiene una cuenta? <Link to="/register">Registarse aquí</Link></span>
        </div>
     
      </form>
    </div>
  );
};

export default Login;
