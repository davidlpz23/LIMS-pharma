//importar el modelo de reactivos                                     
const { Reagent } = require('../models');
//importar el decorador de alertas para reactivos
const ReagentAlertDecorator = require('../services/alertDecorator');


//importar el servicio de reactivos 
const ReagentService = require('../services/reagentService');
//importar las estrategias de búsqueda      
const { NameSearchStrategy, BatchNumberSearchStrategy } = require('../services/searchStrategies');
//crear una instancia del servicio de reactivos     
const reagentService = new ReagentService();

// modelos de reactivos:    

//funcion para registrar un reactivo en la base de datos.                                                                                                      
exports.registerReagent = async (req, res) => {
  try {
    const { name, batchNumber, receptionDate, expirationDate, storageConditions, quantity } = req.body;
    const reagent = await Reagent.create({ name, batchNumber, receptionDate, expirationDate, storageConditions, quantity });
    res.status(201).json(reagent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función para obtener todos los reactivos de la base de datos.       
exports.getReagents = async (req, res) => {
  try {
    const reagents = await Reagent.findAll();
    res.status(200).json(reagents);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Función para obtener un reactivo por su id.
exports.updateReagent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, batchNumber, receptionDate, expirationDate, storageConditions, quantity } = req.body;
    const reagent = await Reagent.findByPk(id);
    if (!reagent) {
      return res.status(404).json({ error: 'Reagent not found' });
    }
    await reagent.update({ name, batchNumber, receptionDate, expirationDate, storageConditions, quantity });
    res.status(200).json(reagent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función para eliminar un reactivo por su id.
exports.deleteReagent = async (req, res) => {
  try {
    const { id } = req.params;
    const reagent = await Reagent.findByPk(id);
    if (!reagent) {
      return res.status(404).json({ error: 'Reagent not found' });
    }
    await reagent.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// servicios de reactivos: 

// Función para buscar reactivos por nombre o número de lote.
exports.searchReagents = async (req, res) => {
  try {
    const { query, strategy } = req.query;
    if (strategy === 'name') {
      reagentService.setSearchStrategy(new NameSearchStrategy());
    } else if (strategy === 'batchNumber') {
      reagentService.setSearchStrategy(new BatchNumberSearchStrategy());
    } else {
      reagentService.setSearchStrategy(null);
    }
    const results = await reagentService.searchReagents(query);
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};