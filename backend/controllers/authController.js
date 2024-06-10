const { User } = require('../models');

exports.register = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const user = await User.create({ username, password, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username, password } });
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
