const mediaRouter = require('express').Router({ mergeParams : true}) // mergeParmas nos permite matener el params del padre. 

const { 
    searchMovies, 
    getList,
    getGneres,

} = require('./media.controllers')
const { getGneres } = require('./media.services')


mediaRouter.get("/search", searchMovies )

mediaRouter.get("/genres", getGneres)

mediaRouter.get("/detail/:mediaId")

mediaRouter.get("/:mediaCategory", getList)



module.exports = { mediaRouter }