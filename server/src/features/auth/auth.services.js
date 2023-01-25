const { StatusCodes } = require('http-status-codes')
const uuid = require("uuid")

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
        return new AppError(
        'USER_ALREADY_EXIST',
        StatusCodes.BAD_REQUEST,
        true
        )
    }

    const hashPassword = await encrypt(password)

    const data = await Users.create({
        id:uuid.v4(),
        displayName,
        email,
        password: hashPassword
    })

    data.password = undefined

    const user = {
        ...data,
        token: await tokenSign(data)
    }






    return user
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