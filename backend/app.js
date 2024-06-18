
const express = require('express');
const cors = require('cors');  // Importar cors
const app = express();
const authRoutes = require('./routes/authRoutes');
const sampleRoutes = require('./routes/sampleRoutes');
const reagentRoutes = require('./routes/reagentRoutes');
const sequelize = require('./config/database');
const PORT = process.env.PORT || 5000;


// Middleware para permitir que el servidor reciba y envíe datos en formato JSON.       
app.use(cors());  // Usar cors middleware
app.use(express.json());

// Ruta de prueba para verificar que el servidor está corriendo.    
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Rutas de autenticación y de ejemplos.              
app.use('/auth', authRoutes);
app.use('/samples', sampleRoutes);
app.use('/reagents', reagentRoutes);


// Middleware para manejar errores.           
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

// Sincronizar la base de datos y luego iniciar el servidor en el puerto 5000 o el puerto que se haya definido en el archivo .env si existe uno.     
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });   
  })

  // En caso de error al conectar a la base de datos, se imprime un mensaje en la consola.    
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Exportar la aplicación para poder ser utilizada en otros archivos.
module.exports = app;
