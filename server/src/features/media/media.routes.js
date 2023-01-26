const mediaRouter = require('express').Router()

const { searchMovies } = require('./media.controllers')


mediaRouter.get("/", searchMovies )



module.exports = { mediaRouter }