// Importación de módulos
const { Reagent } = require('../models');
//   Importar el decorador de alertas para reactivos
const ReagentAlertDecorator = require('./alertDecorator');
//   Importar las estrategias de búsqueda
const { NameSearchStrategy, BatchNumberSearchStrategy } = require('./searchStrategies');

// Servicio de reactivos                                  
class ReagentService {
  constructor() {
    this.searchStrategy = null;
  }
//  Función para establecer la estrategia de búsqueda
  setSearchStrategy(strategy) {
    this.searchStrategy = strategy;
  }
//  Función para obtener todos los reactivos de la base de datos
  async searchReagents(query) {
    const reagents = await Reagent.findAll();
    const decoratedReagents = reagents.map(reagent => {
      const decoratedReagent = new ReagentAlertDecorator(reagent);
      return decoratedReagent.getDetails();
    });
    if (this.searchStrategy) {
      return this.searchStrategy.search(decoratedReagents, query);
    }
    return decoratedReagents;
  }
}

module.exports = ReagentService;
