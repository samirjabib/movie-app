const reviewsServices = require('./review.services')
const { StatusCodes } = require("http-status-codes")
 

const createReview = (req, res, next) => {
    try {
        const { movieId } = req.params
        const { user } = req


        const data = reviewsServices.createReview(movieId, user)

        res.status(StatusCodes.CREATED).json({
            data
        })
    } catch (error) {
        
    }
}



module.exports = {
    createReview
}