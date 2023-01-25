const { StatusCodes } = require("http-status-codes")

const register = (req, res, next) => {
    try {
        res.status(StatusCodes.CREATED).json({
            samir:'samir'
        })
    } catch (error) {
        next(error)
    }
}

const login = (req, res, next) => {
    try {
        res.status(StatusCodes.CREATED).json({
            samir:'samir'
        })
    } catch (error) {
        next(error)
    }
}



module.exports = { 
    register,
    login
}