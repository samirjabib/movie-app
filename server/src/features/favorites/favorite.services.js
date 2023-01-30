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

    if(!data){
        return AppError('DONT_EXISTS_FAVORITE', StatusCodes.BAD_REQUEST, false)
    } else {
        await data.destroy()
        console.log('destroy favorite')
    }
    return data
}


const getFavoritesOfUser = async(user) => {
    const data = await Favorites.findAll({
        where:{
            user:user.id
        }
    })
    return data
}

module.exports = {
    addFavorite,
    removeFavorite,
    getFavoritesOfUser
}