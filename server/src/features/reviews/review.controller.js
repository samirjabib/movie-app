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
        const { user } = req

        const response = await reviewsServices.removeReview(reviewId, user)
        
        const error = response.stack
        if(error){
            return next(response)
        }

        res.status(StatusCodes.NO_CONTENT).json(
            { status:'product_deleted'}
        )
    } catch (error) {
        next(error)
    }
}


const getReviewsOfUser = async(req, res, next) => {
    try {
        const { user } = req

        const response = await reviewsServices.getReviewsOfUser(user)

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
    createReview,
    removeReview,
    getReviewsOfUser,
}