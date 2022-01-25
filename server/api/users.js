const router = require('express').Router()
const { Users } = require('../db')

router.get('/', async (req, res) => {
    try {
        const users = await Users.findAll()
        res.status(200).send(users)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.get('/:userId', async(req, res) => {
    try {
        const user = await Users.findByPk(req.params.userId)
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }
})

router.post('/', async(req, res) => {
    try {
        const newUser = await Users.create(req.body)
        res.json(newUser)
    } catch (error) {
        res.send(error.message)
    }
})

router.delete('/:userId', async(req, res) => {
    try{
        const inputid = req.params.userId;
        await Users.destroy({where: {userId : inputid}});
        res.status(200).json({
            outcome: `Deleted user id ${inputid}`
        })
    }catch (error) {
        res.send(error.message)
    }

})

module.exports = router