
// Importar librerías y dependencias    
const express = require('express');

// Importar las funciones para registrar, obtener, actualizar y eliminar muestras del controlador de muestras.  
const { registerSample, getSamples, updateSample, deleteSample } = require('../controllers/sampleController');

// Importar el middleware de autenticación para proteger las rutas de la API de modo que solo los usuarios autenticados puedan acceder a ellas.
const authMiddleware = require('../middleware/auth');

// Inicializar el enrutador de express para las rutas de muestras.      
const router = express.Router();

// Definir las rutas para el recurso de muestras.
router.post('/register', authMiddleware, registerSample);
router.get('/', authMiddleware, getSamples);
router.put('/:id', authMiddleware, updateSample);
router.delete('/:id', authMiddleware, deleteSample);

module.exports = router;
