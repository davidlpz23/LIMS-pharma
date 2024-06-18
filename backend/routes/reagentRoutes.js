// Propósito: Manejar las rutas de la API para los reactivos.
const express = require('express');
// Importar el controlador de reactivos.
const { registerReagent, getReagents, updateReagent, deleteReagent } = require('../controllers/reagentController');
// Crear un router de express.
const router = express.Router();

// Rutas para registrar, obtener, actualizar y eliminar reactivos.
router.post('/register', registerReagent);
router.get('/', getReagents);
router.put('/:id', updateReagent);
router.delete('/:id', deleteReagent);

module.exports = router;
