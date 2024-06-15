
// Importamos el modelo Sample.         
const { Sample } = require('../models');

// Función para registrar una muestra en la base de datos.
exports.registerSample = async (req, res) => {
  try {
    const { productName, batchNumber, receptionDate, uniqueId, details } = req.body;
    const sample = await Sample.create({ productName, batchNumber, receptionDate, uniqueId, details });
    res.status(201).json(sample);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función para obtener todas las muestras de la base de datos.
exports.getSamples = async (req, res) => {
  try {
    const samples = await Sample.findAll();
    res.status(200).json(samples);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
