//first commit added index.js
const express = require('express')
const morgan = require('morgan')
const { db } = require('./db')
const cors = require('cors')

const app = express()
const PORT = 8080

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use('/api', require('./api/index'))

db.sync().then(() =>{
    console.log('db synced')
    app.listen(process.env.PORT, () =>
        console.log(`Serving ports ${process.env.PORT}`)
    )
})
