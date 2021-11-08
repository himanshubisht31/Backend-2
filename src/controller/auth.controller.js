const User= require('../model/user.model')
require('dotenv').config()
const jwt=require('jsonwebtoken')

const register=user=> jwt.sign({user},process.env.KEY)