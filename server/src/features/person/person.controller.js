const { response } = require("express")
const { StatusCodes } = require("http-status-codes")
const personServices = require('./person.services')

const personDetail = async(req, res, next) => {
    try {
    const { personId} = req.params

    const response = await personServices.personDetail(personId)
    
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


const personMedias = async(req, res) => {
    try {
        const { personId } = req.params
        const response = await personServices.personMedias(personId)

        res.status(StatusCodes.OK).json({
            response
        })
    } catch (error) {
        next(error)
    }
}


module.exports = {
    personDetail,
    personMedias,
}