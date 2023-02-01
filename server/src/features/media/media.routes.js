const mediaRouter = require('express').Router({ mergeParams : true}) // mergeParmas nos permite matener el params del padre. 

const { 
    searchMovies, 
    getList,
    getGenres,
    getDetail,

} = require('./media.controllers')



mediaRouter.get("/search", searchMovies )

mediaRouter.get("/genres", getGenres)

mediaRouter.get("/detail/:mediaId", getList)

mediaRouter.get("/:mediaCategory", getDetail)



module.exports = { mediaRouter }