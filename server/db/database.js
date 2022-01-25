const Sequelize = require('sequelize')
// const dbConfig = require('config')
const pkg = require('../../package.json')

// const db = new Sequelize(
//     process.env.DATABASE_url || `postgres://postgres:postgres@localhost:5432/weatherrangers_backend`,
//     {
//         logging: false
//     }
// )

//dynamic for hereko --> process.env.DATABASE_URL 
//static for local machine --> `postgres://postgres:postgres@localhost:5432/weatherrangers_backend
// use nodemon in production - LOCAL MACHINE
    //"start": "node server"
    //use node for development - HEREKO
const db = new Sequelize(process.env.DATABASE_URL || `postgres://postgres:postgres@localhost:5432/weatherrangers_backend`, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);


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