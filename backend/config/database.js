// Propósito: Configurar la conexión a la base de datos.
const { Sequelize } = require('sequelize');

// Verificar si la aplicación está en un entorno de producción (Heroku)
const isProduction = process.env.NODE_ENV === 'production';

// Crear una instancia de Sequelize usando la URL de conexión de la base de datos
const sequelize = isProduction 
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      protocol: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    })
  : new Sequelize(
      require('./config.json').development.database,
      require('./config.json').development.username,
      require('./config.json').development.password,
      {
        host: require('./config.json').development.host,
        dialect: require('./config.json').development.dialect
      }
    );

// Exportar la instancia de Sequelize.
module.exports = sequelize;
