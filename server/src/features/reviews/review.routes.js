const {  authMiddleware } = require('../../middlewares/authLogin')



const reviewsRouter = require('express').Router({ mergeParams:true })


reviewsRouter.get("/")


reviewsRouter.post("/")


reviewsRouter.delete("/:reviewId")


module.exports = { reviewsRouter }