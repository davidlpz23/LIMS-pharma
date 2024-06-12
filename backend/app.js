
const express = require('express');
const cors = require('cors');  // Importar cors
const app = express();
const authRoutes = require('./routes/authRoutes');
const PORT = process.env.PORT || 5000;

app.use(cors());  // Usar cors middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use('/auth', authRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
