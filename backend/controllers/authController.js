const { User } = require('../models');
const { generateToken } = require('../utils/jwt');

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

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isValid = await user.comparePassword(password); // Use instance method
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(user);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.logout = (req, res) => {
  res.status(200).json({ message: 'Logout successful' });
};
