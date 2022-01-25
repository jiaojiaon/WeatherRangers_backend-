'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Favorites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER,
        onDelete: 'CASCADE',
        // references: {
        //   model: 'Users',        
        //   key: 'user_id',        
        // },
        allowNull: false,
      },
      zip_code: {
        type: Sequelize.DataTypes.INTEGER,
        onDelete: 'CASCADE',
        // references: {
        //   model:'Locations', 
        //   key:'zip_code',          
        // },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Favorites');
  }
};