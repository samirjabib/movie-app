const mediaRouter = require('express').Router({ mergeParams : true}) // mergeParmas nos permite matener el params del padre. 

const { 
    searchMovies, 
    getList,
    getGneres,
    getDetail,

} = require('./media.controllers')

const { getGneres } = require('./media.services')


mediaRouter.get("/search", searchMovies )

mediaRouter.get("/genres", getGneres)

mediaRouter.get("/detail/:mediaId", getList)

mediaRouter.get("/:mediaCategory", getDetail)



module.exports = { mediaRouter }