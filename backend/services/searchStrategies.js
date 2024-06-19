//   Estrategias de búsqueda        
class SearchStrategy {
    search(reagents, query) {
      throw new Error('Method "search" should be implemented');
    }
  }
  //    Estrategia de búsqueda por nombre       
  class NameSearchStrategy extends SearchStrategy {
    search(reagents, query) {
      return reagents.filter(reagent => reagent.name.toLowerCase().includes(query.toLowerCase()));
    }
  }
  //    Estrategia de búsqueda por número de lote       
  class BatchNumberSearchStrategy extends SearchStrategy {
    search(reagents, query) {
      return reagents.filter(reagent => reagent.batchNumber.toLowerCase().includes(query.toLowerCase()));
    }
  }
  //    Exportar las estrategias de búsqueda        
  module.exports = {
    NameSearchStrategy,
    BatchNumberSearchStrategy,
  };
  