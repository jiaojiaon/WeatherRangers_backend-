const router = require('express').Router()
const  Locations = require('../db/location')

router.get('/', async (req, res) => {
    try {
        const location = await Locations.findAll()
        res.status(200).send(location)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.get('/:zipCode',async(req, res) => {
    try {
        const location = await Locations.findOne({
            where: { zipCode: req.params.zipCode }
        })
        res.send(location)
    } catch (error) {
        res.send(error.message)
    }
})
router.get('/:id', async(req, res) => {
    try {
        const location = await Locations.findByPk(req.params.id)
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

router.delete('/:id', async(req, res) =>  {
    try {
        const locationId = await Locations.findByPk(req.params.id)
        locationId.destroy()
        res.status(200).send("Successfully Deleted!")
    } catch(error) {
        res.send(error.message)
    }
});


module.exports = router