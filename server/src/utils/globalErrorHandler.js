const { config } = require("../config")

const status = config.nodeEnv

const sendErrorProduction = (err, res, res) => {
    const statusCode = res.statusCode || 500

    res.status(statusCode).json({
        status:'fail',
        message:err.message || 'something went very wrong'
    })
}


const sendErrorDevelopment = (err, res , next) => {
    const statusCode = res.statusCode || 500

    res.status(statusCode).json({
        status:'fail',
        message:err.message,
        error:err,
        stack:err.stack
    })
}


const globalErrorHandler = (err, req, res, next) => {
    if(status === 'development'){
        return sendErrorDevelopment(req, res, next)
    }

    if(status === 'production'){
        return sendErrorProduction(req, res, next)
    }
}


module.exports = { globalErrorHandler}