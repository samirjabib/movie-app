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
    }
   

}


const getList = async( req, res, next) => {
    try {
        const { page } = req.query
        console.log(page)
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
        next(error)
    }
}

const getGenres = async( req, res , next) => {
    try {
        const { mediaType } = req.params

        const response = await mediaServices.getGenres( { mediaType } )

        const error = response.stack
        if(error){
            return next(response)
        }
        console.log(error)

        res.status(StatusCodes.OK).json({
            response
        })

    } catch (error) {
        console.log(error)
        next(error)
    }
}


const getDetail = async(req, res, next) => {
    try {
        const { mediaType, mediaId } = req.params
        const { user } = req


        // const response = await mediaServices.getDetails(mediaType, mediaId, user)
        
        // const error = response.stack
        // if(error){
        //     return next(response)
        // }

        res.status(StatusCodes.OK).json(
            // response
            user
        )

    } catch (error){
        next(error)
    }
}




module.exports = { 
    searchMovies,
    getList,
    getGenres,
    getDetail


}