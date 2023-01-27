const {  authMiddleware } = require('../../middlewares/authLogin')

const { validateReview } = require('./middlewares/review.validators')

const { createReview } = require('./review.services')


const reviewsRouter = require('express').Router({ mergeParams:true })


reviewsRouter.get("/")


reviewsRouter.post("/", authMiddleware, validateReview, createReview)


reviewsRouter.delete("/:reviewId")


module.exports = { reviewsRouter }