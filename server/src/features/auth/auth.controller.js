const { response } = require("express")
const { StatusCodes } = require("http-status-codes")
const { Users } = require("../../models/sql/user.model")
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
            response
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

const getInfo = async (req, res, next) => {
    try {
        const { id } = req.params
        
        const response = await authServices.getInfo()
    } catch (error) {
        console.log(error)
    }
}

module.exports = { 
    register,
    login
}