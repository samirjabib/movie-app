const { StatusCodes } = require('http-status-codes')

//Handlers
const { AppError } = require('../../helpers/appError')
const { encrypt, compare } = require('../../helpers/handlePassword')
const { tokenSign } = require('../../helpers/handleJwt')

//Models
const { Users } = require('../../models/sql/user.model')


const register = async(body) => {

    const { displayName, email, password } = body

    const userExists = await Users.findOne({
        where:{
            email
        }
    })

    if(userExists){
        return new AppError)
        'USER_ALREADY_EXIST',
        StatusCodes.BAD_REQUEST,
        true
    }

    const hashPassword =

    const data = await Users.create({
        ...body
    })

    console.log(data)

    return data
}


const login = async(body) => {

    console.log(body)

    const data = await Users.findOne({
        where:{
            email:body.email
        }
    })


    console.log(data)



    return data

}


module.exports = {
    login,
    register
}