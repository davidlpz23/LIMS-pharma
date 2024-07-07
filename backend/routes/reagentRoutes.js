// Propósito: Manejar las rutas de la API para los reactivos.                   
const express = require('express');
// Importar las funciones para registrar, obtener, actualizar y eliminar reactivos del controlador de reactivos.    
const { registerReagent, getReagents, updateReagent, deleteReagent, searchReagents } = require('../controllers/reagentController');
// Importar el middleware de autenticación para proteger las rutas de la API de modo que solo los usuarios autenticados puedan acceder a ellas.             
const authMiddleware = require('../middleware/auth');

// Inicializar el enrutador de express para las rutas de reactivos.     
const router = express.Router();

// rutas para registrar, obtener, actualizar y eliminar reactivos en la API y protegerlas con el middleware de autenticación para que solo los usuarios autenticados puedan acceder a ellas.
router.post('/register', authMiddleware, registerReagent);
router.get('/', authMiddleware, getReagents);
router.put('/:id', authMiddleware, updateReagent);
router.delete('/:id', authMiddleware, deleteReagent);
router.get('/search', authMiddleware, searchReagents);

// Exportar el enrutador para ser utilizado en otros archivos del proyecto.
module.exports = router;
