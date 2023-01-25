const { authRouter } = require("../features/auth/auth.routes")



const mainRouter = require("express").Router()

mainRouter.use('/auth', authRouter)


module.exports = { mainRouter }