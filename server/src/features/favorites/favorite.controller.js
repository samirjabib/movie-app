const { StatusCodes } = require('http-status-codes')
const { Favorites } = require('../../models/sql/favorite.model')

const favoriteServices = require('./favorite.services')




const addFavorite = async(req, res, next) => {
    try {
        const response = await favoriteServices.addFavorite()

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


const removeFavorite = async(req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
    }
}


const getFavoritesOfUser = async(req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
    }
}


module.exports = {
    addFavorite,
    removeFavorite,
    getFavoritesOfUser
}