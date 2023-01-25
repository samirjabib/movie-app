const authRouter = require("express").Router()



authRouter.post('/register', (req, res) => {
    console.log('register')
})


authRouter.post('/login', (req, res) => {
    console.log('login')
})


module.exports = { authRouter }