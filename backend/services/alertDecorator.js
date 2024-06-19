// Propósito: Clase que se encarga de decorar un reactivo con una alerta de stock
class ReagentAlertDecorator {
  constructor(reagent) {
    this.reagent = reagent;
  }

  // Función para obtener los detalles de un reactivo
  getDetails() {
    const details = {
      id: this.reagent.id,
      name: this.reagent.name,
      batchNumber: this.reagent.batchNumber,
      receptionDate: this.reagent.receptionDate,
      expirationDate: this.reagent.expirationDate,
      storageConditions: this.reagent.storageConditions,
      quantity: this.reagent.quantity,
    };


    // Alerta de stock  
    if (this.isExpired()) {
      details.alert = 'Expired';
    } else if (this.isNearExpiration()) {
      details.alert = 'Near Expiration';
    } else {
      details.alert = 'In Stock';
    }

    return details;
  }

  // Función para verificar si un reactivo está vencido
  isExpired() {
    const today = new Date();
    const expirationDate = new Date(this.reagent.expirationDate);
    return expirationDate < today;
  }

  // Función para verificar si un reactivo está cerca de vencer
  isNearExpiration() {
    const today = new Date();
    const expirationDate = new Date(this.reagent.expirationDate);
    const timeDiff = expirationDate - today;
    const daysDiff = timeDiff / (1000 * 3600 * 24);
    return daysDiff <= 30;
  }
}

module.exports = ReagentAlertDecorator;
