// Propósito: Configurar la conexión a la base de datos.                  
const { Sequelize } = require('sequelize');

// Importar la configuración de la base de datos.           
const config = require('./config.json').development;

// Crear una instancia de Sequelize con la configuración de la base de datos.     
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

// Exportar la instancia de Sequelize.    
module.exports = sequelize;