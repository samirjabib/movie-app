const reviewsServices = require('./review.services')
const { StatusCodes } = require("http-status-codes")
 

const createReview = (req, res, next) => {
    try {
        const { movieId } = req.params
        const { user, body } = req


        const response = reviewsServices.createReview({movieId, user, body})
        
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



module.exports = {
    createReview
}