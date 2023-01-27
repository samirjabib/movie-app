
const { 
    personDetail,
    personMedias
} = require('./person.controller')


const personRouter = require('express').Router()

personRouter.get("/:personId/medias", personDetail)

personRouter.get("/:personId", personMedias )


module.exports = {
    personRouter
}