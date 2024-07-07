// Importar la instancia de Axios configurada.
import api from './api';

// Función para registrar un usuario en la API.
const register = async (username, password, email) => {
  const response = await api.post('/auth/register', { username, password, email });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Función para autenticar un usuario en la API.
const login = async (username, password) => {
  const response = await api.post('/auth/login', { username, password });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Función para cerrar sesión de un usuario en la API.
const logout = () => {
  localStorage.removeItem('user');
};

// Función para obtener el usuario actualmente autenticado.
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

// Exportar las funciones para ser utilizadas en otros archivos del proyecto.
export default {
  register,
  login,
  logout,
  getCurrentUser,
};
