// inicilizamos el middleware de autenticación que sirve para verificar si el usuario está autenticado.         
const { verifyToken } = require('../utils/jwt');


// función que verifica si el usuario está autenticado.
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }


  // verificamos si el token es válido. 
  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// exportamos el middleware para ser utilizado en otros archivos del proyecto.
module.exports = authMiddleware;
