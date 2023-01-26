const { StatusCodes } = require("http-status-codes");
const { tmdbApi } = require("../../utils/tmdb/tmdb.api");

const mediaServices = require('./media.services')

const searchMovies = async(req, res, next) => {

    try {
        const { mediaType } = req.params;
        const { query, page } = req.query

        const response = await mediaServices.searchMovies({mediaType, query, page})

        const error = response.stack
        if(error){
            return next(response)
        }

        res.status(StatusCodes.OK).json({
            response
        })

    } catch (error) {
        next(error)
        console.log(error)
    }
   

}


const getList = async( req, res, next) => {
    try {
        const { page } = req.query
        const { mediaType, mediaCategory } = req.params

        const response = await mediaServices.getList({page, mediaType, mediaCategory})

        const error = response.stack
        if(error){
            return next(response)
        }

        res.status(StatusCodes.OK).json({
            response
        })
    } catch (error) {
        next()
    }
}

const getGneres = async( req, res , next) => {
    try {
        const { mediaType } = req.params

        const response = await mediaServices.getGneres(mediaType)

        const error = response.stack
        if(error){
            return next(response)
        }

        res.status(StatusCodes.OK).json({
            response
        })

    } catch (error) {
        next(error)
    }
}





module.exports = { 
    searchMovies,
    getList,
    getGneres,
    

}