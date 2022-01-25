const router = require('express').Router()
const { Locations } = require('../db')

router.get('/', async (req, res) => {
    try {
        const location = await Locations.findAll()
        res.status(200).send(location)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.get('/:locationId', async(req, res) => {
    try {
        const location = await Locations.findByPk(req.params.locationId)
        res.send(location)
    } catch (error) {
        res.send(error.message)
    }
})

router.post('/', async(req, res) => {
    try {
        const newLocation = await Locations.create(req.body)
        res.json(newLocation)
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = router