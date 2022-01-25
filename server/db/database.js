const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const db = new Sequelize(
    process.env.DATABASE_url || `postgres://postgres:sql@localhost:5432/${pkg.name}`,
    {
        // user: 'postgres',
        // password: 'sql',
        logging : false
    }
)

module.exports = db