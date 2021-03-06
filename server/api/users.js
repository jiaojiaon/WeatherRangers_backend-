const router = require('express').Router()
const Users = require('../db/user')
router.get('/', async (req, res) => {
    try {
        const users = await Users.findAll()
        res.status(200).send(users)
    } catch (error) {
        res.status(404).send(error.message)
    }
})
router.post('/auth', async (req, res) => {
    
    try {
        const user = await Users.findOne({
            where: { email: req.body.data.email }
        })
        if(user.password === req.body.data.password){
            const id = user.id
            res.status(200).send({id:id})
        }else{
            res.status(401).send()
        }
    } catch (error) {
        res.send(error.message)
    }
    // res.send(req.body)
})
router.get('/:id', async (req, res) => {
    try {
        const user = await Users.findByPk(req.params.id)
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }
})
router.post('/', async (req, res) => {
    try {
        const newUser = await Users.create(req.body)
        res.json(newUser)
    } catch (error) {
        res.send(error.message)
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const userId = await Users.findByPk(req.params.id)
        userId.destroy()
        res.status(200).send("Successfully Deleted!")
    } catch (error) {
        res.send(error.message)
    }
});
module.exports = router