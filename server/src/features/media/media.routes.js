const mediaRouter = require('express').Router({ mergeParams : true}) // mergeParmas nos permite matener el params del padre. 

const { 
    searchMovies, 
    getList,
    getGenres,
    getDetail,

} = require('./media.controllers')

const { authMiddleware } = require('../../middlewares/authLogin')


mediaRouter.get("/search", searchMovies )

mediaRouter.get("/genres", getGenres)

mediaRouter.get("/detail/:mediaId", authMiddleware ,getDetail)

mediaRouter.get("/:mediaCategory", getList)



module.exports = { mediaRouter }