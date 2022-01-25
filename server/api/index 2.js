const router = require('express').Router()

router.use('/students', require('./students'))

module.exports = router