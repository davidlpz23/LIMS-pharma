// codigo para generar y verificar tokens           
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'supersecretkey';

// función que genera un token con la información del usuario que se pasa como argumento.           
const generateToken = (user) => {
  const payload = { id: user.id, username: user.username, email: user.email };
  return jwt.sign(payload, secret, { expiresIn: '5h' });
};

// función que verifica un token y devuelve la información del usuario si el token es válido.
const verifyToken = (token) => {
  return jwt.verify(token, secret);
};

// exportación de las funciones para ser utilizadas en otros archivos del proyecto. 
module.exports = { generateToken, verifyToken };
