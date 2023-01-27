const reviewsServices = require('./review.services')
const { StatusCodes } = require("http-status-codes")
 

const createReview = async(req, res, next) => {
    try {
        const { movieId } = req.params
        const { user, body } = req

        const response = await reviewsServices.createReview({movieId, user, body})
        
        const error = response.stack
        if(error){
            return next(response)
        }

        res.status(StatusCodes.CREATED).json({
            response
        })
    } catch (error) {
        next(error)
    }
}


const removeReview = async(req, res, next) => {
    try {
        const { reviewId } = req.params
        const response = await reviewsServices.removeReview(reviewId)
        
        const error = response.stack
        if(error){
            return next(response)
        }

        res.status(StatusCodes.NO_CONTENT).json(
            response
        )
    } catch (error) {
        next(error)
    }
}


const getReviewsOfUser = async() => {

}



module.exports = {
    createReview
}