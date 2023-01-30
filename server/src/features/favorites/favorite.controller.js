const { StatusCodes } = require('http-status-codes')

const favoriteServices = require('./favorite.services')



const addFavorite = async(req, res, next) => {
    try {
        const { user  } = req.user
        const { body } = req

        const response = await favoriteServices.addFavorite({
            user,
            body
        })

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
        const { favoriteId } = req.params
        const { user } = req

        const response = await favoriteServices.removeFavorite({favoriteId, user})

        const error = response.stack
        if(error){
            return next(response)
        }

        res.status(StatusCodes.NO_CONTENT).json({
            response
        })
        
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