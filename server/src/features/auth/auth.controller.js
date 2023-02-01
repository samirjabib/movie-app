const { StatusCodes } = require("http-status-codes")
const authServices = require('./auth.services')

const register = async (req, res, next) => {
    try {
        const { body } = req
        console.log(body)
        const response = await authServices.register(body)

        const error = response.stack
        if(error){
            return next(response)
        }

        res.status(StatusCodes.CREATED).json({
            response
        })
    } catch (error) {
        next(error)
        console.log(error)
    }
}

const login = async(req, res, next) => {
    try {
        const { body } = req
        const response = await authServices.login(body)

        const error = response.stack
        console.log(error)
        if(error){
            return next(response)
        }

        res.status(StatusCodes.OK).json({
            response
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const getInfo = async (req, res, next) => {
    try {
        const { id } = req.params
        
        const response = await authServices.getInfo(id)

        const error = response.stack
        if(error){
            return next(response)
        }

    } catch (error) {
        next(error)
    }
}

const updatePassword = async(req, res, next) => {
    try {
        const { body } = req
        const response = await authServices.updatePassword(body)

        const error = response.stack
        if(error){
            return next(response)
        }
    } catch (error) {
        next(error)
    }
}

module.exports = { 
    register,
    login,
    getInfo,
    updatePassword,
}