const { DataTypes, INTEGER } = require('sequelize')
const db = require("./database")

// Zip Code(PK)
//locationID(PK)
// States
// City name 


const Locations = db.define('locations', {

    zipCode: {
        type: DataTypes.INTEGER(5),
        primarykey: true,
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true
        }
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true
        }
    },
    states: {
        type: DataTypes.STRING(50),

    },


}, {
    freezeTableName: true
})

module.exports = Locations