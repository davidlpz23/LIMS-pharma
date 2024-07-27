const { Sequelize } = require('sequelize');

const isProduction = process.env.NODE_ENV === 'production';

const sequelize = isProduction
  ? new Sequelize(process.env.HEROKU_POSTGRESQL_AMBER_URL, {
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

module.exports = sequelize;



