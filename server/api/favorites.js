const router = require('express').Router()
const  Favorites = require('../db/favorites')

router.get('/', async (req, res) => {
    try {
        const fav = await Favorites.findAll()
        res.status(200).send(fav)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.get('/:userId', async(req, res) => {
    try {
        const fav = await Favorites.findByPk(req.params.userId)
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

router.delete('/:id', async(req, res) =>  {
    try {
        const favId = await Favorites.findByPk(req.params.id)
        favId.destroy()
        res.status(200).send("Successfully Deleted!")
    } catch(error) {
        res.send(error.message)
    }
});

module.exports = router