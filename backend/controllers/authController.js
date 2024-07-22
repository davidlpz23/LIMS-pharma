const { User } = require('../models');
const { generateToken } = require('../utils/jwt');

// registrar un usuario           
exports.register = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const user = await User.create({ username, password, email });
    const token = generateToken(user);
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// iniciar sesión           
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
// Verificar si la contraseña es válida
    const isValid = await user.comparePassword(password); // Use instance method
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
// Generar token JWT            
    const token = generateToken(user);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// cerrar sesión          
exports.logout = (req, res) => {
  res.status(200).json({ message: 'Logout successful' });
};
