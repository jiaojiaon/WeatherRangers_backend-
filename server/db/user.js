const { DataTypes, INTEGER } = require('sequelize')
const db = require("./database")
// Id(SERIAL PK)
// First Name
// Last Name
// email
// password
//zipcode

const Users = db.define('users', {
    
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true
        }
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true
        }
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true,
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING(15),
    },
    zipCode:{
        type: DataTypes.INTEGER(5)
    }
    
}, {
    freezeTableName: true
})

module.exports = Users