const { Favorites } = require('../../models/sql/favorite.model')
const { AppError } = require('../../helpers/appError')


const { StatusCodes } = require("http-status-codes");
const uuid = require("uuid")




const addFavorite = async({user, body}) => {
    const { mediaId } = req.body

    const isFavorite = await  Favorites.findOne({
        where:{
            user: user.id,
            mediaId
        }
    })

    if(isFavorite){
        return AppError('ALREADY_EXISTS', StatusCodes.OK, false)
    }

    const data = await Favorites.create({
        id:uuid.v4(),
        user:user.id,
        ...body
    })

    return data
}

const removeFavorite = async({favoriteId, user}) => {
    const data = await Favorites.findOne({
        where:{
            user:user.id,
            id:favoriteId
        }
    })

    return data
}


const getFavoritesOfUser = async() => {

}

module.exports = {
    addFavorite,
    removeFavorite,
    getFavoritesOfUser
}