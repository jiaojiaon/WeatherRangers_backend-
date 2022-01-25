const Sequelize = require('sequelize')
const dbConfig = require('config')
const pkg = require('../../package.json')

const db = new Sequelize(
    dbConfig.dbURL || `postgres://localhost:5432/${pkg.name}`,
    {
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        logging: false
    }
)

async function connectStatus() {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectStatus()

module.exports = db