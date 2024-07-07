// Propósito: componente para cerrar la sesión de un usuario.       
import React from 'react';
// importar el servicio de autenticación para realizar la autenticación de los usuarios.        
import AuthService from '../services/AuthService';

// componente para cerrar la sesión de un usuario
const Logout = () => {
  // función para manejar el cierre de sesión de un usuario
    const handleLogout = () => {
   // cerrar la sesión del usuario
        AuthService.logout();
       // recargar la página para actualizar la interfaz de usuario
        window.location.reload();
  };

  // botón para cerrar la sesión de un usuario
  return (
    <button onClick={handleLogout} className="btn btn-secondary">
      Logout
    </button>
  );
};

export default Logout;
