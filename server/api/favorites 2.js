const router = require('express').Router()
const { Favorites } = require('../db/favorites')

router.get('/', async (req, res) => {
    try {
        const fav = await Favorites.findAll()
        res.status(200).send(fav)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.get('/:favId', async(req, res) => {
    try {
        const fav = await Favorites.findByPk(req.params.favId)
        res.send(fav)
    } catch (error) {
        res.send(error.message)
    }
})

router.post('/', async(req, res) => {
    try {
        const newFav = await Favorites.create(req.body)
        res.json(newFav)
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = router