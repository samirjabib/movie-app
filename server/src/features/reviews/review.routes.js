const {  authMiddleware } = require('../../middlewares/authLogin')

const { validateReview } = require('./middlewares/review.validators')

const { 
    createReview,
    removeReview, 
    getReviewsOfUser 
} = require('./review.services')


const reviewsRouter = require('express').Router({ mergeParams:true })


reviewsRouter.get("/", authMiddleware, getReviewsOfUser)


reviewsRouter.post("/", authMiddleware, validateReview, createReview)


reviewsRouter.delete("/:reviewId", authMiddleware, removeReview )


module.exports = { reviewsRouter }