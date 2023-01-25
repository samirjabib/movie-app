const { response } = require("express")
const { StatusCodes } = require("http-status-codes")
const authServices = require('./auth.services')

const register = async (req, res, next) => {
    try {
        const { body } = req
        const response = await authServices.register(body)

        const error = response.stack
        if(error){
            return next(response)
        }

        res.status(StatusCodes.CREATED).json({
            ...response
        })
    } catch (error) {
        next(error)
    }
}

const login = async(req, res, next) => {
    try {
        const { body } = req
        const response = await authServices.login(body)

        const error = response.stack
        if(error){
            return next(response)
        }
        
        res.status(StatusCodes.CREATED).json({
            ...response
        })
    } catch (error) {
        next(error)
    }
}



module.exports = { 
    register,
    login
}