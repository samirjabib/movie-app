const { StatusCodes } = require("http-status-codes")
const { AppError } = require("../../helpers/appError")
const { Reviews } = require("../../models/sql/review.model")



const createReview = async({movieId, user, body}) => {
    
    const data = await Reviews.create({
        user:user.id,
        movieId,
        ...body
    })

    console.log(data)

    return data
}


const removeReview = async(reviewId, user) => {


    const data = await Reviews.destroy({
        where:{
            reviewId: reviewId,
            id:user.id
        }
    })


    if(!data){
        return new AppError('REVIEW_DONT EXISTS',StatusCodes.BAD_REQUEST, false)
    }
    
}


const getReviewsOfUser = async(user) => {
 
    const data = await Reviews.findAll({
        where:{
            id:user.id
        }
    })


    return data
}



module.exports = {
    createReview,
    removeReview,
    getReviewsOfUser
}