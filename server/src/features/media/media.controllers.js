const { StatusCodes } = require("http-status-codes")

const searchMovies = async(req, res, next) => {

    res.status(StatusCodes.OK).json({
        message:'ok'
    })

}



module.exports = { searchMovies }