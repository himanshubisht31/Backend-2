const express=require('express')
const User=require('../model/user.model')

const router = express.Router()

router.get('/', async (req, res) => {
    const user = await User.find().lean().exec()
    return res.send(user)
})

router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).send(user);
    } catch (error) {
        return res.send(400).send(error.message)
    }
})
module.exports=router