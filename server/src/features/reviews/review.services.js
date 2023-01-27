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


const removeReview = async(reviewId) => {

}





module.exports = {
    createReview,
    removeReview,
}