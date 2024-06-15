
// Importar librerías y dependencias    
const express = require('express');

// Importar controladores   
const { registerSample, getSamples } = require('../controllers/sampleController');

// Crear un router de express
const router = express.Router();

// Definir las rutas para el recurso de muestras.
router.post('/register', registerSample);
router.get('/', getSamples);

module.exports = router;
