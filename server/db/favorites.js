const { DataTypes, INTEGER } = require('sequelize')
const db = require("./database")
// Favorites
// Id(PK)
// UserId(FK)
// Location(City/Zip code) (FK)


const Favorites = db.define('favorites', {
    favId: {
        type: DataTypes.INTEGER(),
        primarykey:true,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER(),
        foreignkey:true,
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true
        }
    },
    locationId: {
        type: DataTypes.INTEGER(),
        foreignkey: true,
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true
        }
    },
    zipCode: {
        type: DataTypes.INTEGER(5),
        foreignkey:true,
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true
        }
    },

}, {
    freezeTableName: true
})

module.exports = Favorites