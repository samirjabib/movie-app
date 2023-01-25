const { login , register } = require('./auth.controller')
const { validateLogin, validateRegister } = require('./middlewares/auth.validators')

const authRouter = require("express").Router()




authRouter.post('/register', validateRegister, register)
authRouter.post('/login', validateLogin, login)


module.exports = { authRouter }