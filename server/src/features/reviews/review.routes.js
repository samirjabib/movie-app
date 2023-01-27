const {  authMiddleware } = require('../../middlewares/authLogin')

const { validateReview } = require('./middlewares/review.validators')



const reviewsRouter = require('express').Router({ mergeParams:true })


reviewsRouter.get("/")


reviewsRouter.post("/", authMiddleware, validateReview)


reviewsRouter.delete("/:reviewId")


module.exports = { reviewsRouter }