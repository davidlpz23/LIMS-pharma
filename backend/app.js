const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/database');
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Server is running');
});

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
