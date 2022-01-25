const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/favorites', require('./favorites'))
router.use('/locations', require('./locations'))
module.exports = router