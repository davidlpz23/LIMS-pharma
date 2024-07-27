const express = require('express'); // Importar el paquete express. Este paquete permite crear un servidor web.
const cors = require('cors'); // Importar el paquete cors. Este paquete permite que el servidor reciba peticiones de otros servidores.
const path = require('path'); // Importar el paquete path. Este paquete permite trabajar con rutas de archivos y directorios.
const app = express(); //        Crear una instancia de express. Esta instancia representa nuestra aplicación.        
const authRoutes = require('./routes/authRoutes'); // Importar las rutas de autenticación.            
const sampleRoutes = require('./routes/sampleRoutes'); // Importar las rutas de ejemplos.     
const reagentRoutes = require('./routes/reagentRoutes'); // Importar las rutas de reactivos.    
const sequelize = require('./config/database'); // Importar la conexión a la base de datos.
const PORT = process.env.PORT || 5000; // Obtener el puerto del archivo .env o usar el puerto 5000 por defecto.   

// Middleware para permitir que el servidor reciba y envíe datos en formato JSON.
app.use(cors());
app.use(express.json());

// Rutas de autenticación y de ejemplos.
app.use('/auth', authRoutes);
app.use('/samples', sampleRoutes);
app.use('/reagents', reagentRoutes);

// Middleware para manejar errores.
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

// Sincronizar la base de datos y luego iniciar el servidor en el puerto 5000 o el puerto que se haya definido en el archivo .env si existe uno.
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  
  // En caso de que no se pueda conectar a la base de datos, se imprime un mensaje de error en la consola.
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Exportar la aplicación para poder ser utilizada en otros archivos.
module.exports = app;
