'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Location.belongsToMany(models.User, {
        through: 'Favorite'
        // ,
        // as: 'user',
        // foreignKey: 'zip_code',
        // onDelete: 'CASCADE',
      }); 
    }
  }
  Location.init({
    zip_code: DataTypes.INTEGER,
    state: DataTypes.STRING,
    city_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};