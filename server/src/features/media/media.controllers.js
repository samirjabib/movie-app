const { StatusCodes } = require("http-status-codes")

const mediaServices = require('./media.services')

const searchMovies = async(req, res, next) => {

    try {
        const { mediaType } = req.params;
        const { query, page } = req.query

        const response = await mediaServices.searchMovies({mediaType, query, page})

        res.status(StatusCodes.OK).json({
            response
        })

    } catch (error) {
        next(error)
        console.log(error)
    }
   

}



module.exports = { searchMovies }