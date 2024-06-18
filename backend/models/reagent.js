'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reagent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reagent.init({
    name: DataTypes.STRING,
    batchNumber: DataTypes.STRING,
    receptionDate: DataTypes.DATE,
    expirationDate: DataTypes.DATE,
    storageConditions: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reagent',
  });
  return Reagent;
};