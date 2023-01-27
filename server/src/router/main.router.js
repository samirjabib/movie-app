const { authRouter } = require("../features/auth/auth.routes")
const { mediaRouter } = require("../features/media/media.routes")
const { personRouter } = require("../features/person/person.routes")



const mainRouter = require("express").Router()

mainRouter.use('/auth', authRouter)
mainRouter.use('/media', mediaRouter)
mainRouter.use('/person', personRouter)

module.exports = { mainRouter }