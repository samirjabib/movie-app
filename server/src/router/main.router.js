const { authRouter } = require("../features/auth/auth.routes")
const { mediaRouter } = require("../features/media/media.routes")



const mainRouter = require("express").Router()

mainRouter.use('/auth', authRouter)
mainRouter.use('/media', mediaRouter)


module.exports = { mainRouter }