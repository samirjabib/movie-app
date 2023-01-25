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
        data,
        token: await tokenSign(data)
    }

    return user
}


const login = async(body) => {

    const data = await Users.findOne({
        where:{
            email:body.email,
            status:"active"
        }
    })

    if(!data){
        return new AppError(
            'USER_OR_PASSWORD_FAIL',
            StatusCodes.BAD_REQUEST,
            true
        )
    }

    const samePasswords = await compare(password, data.password)

    if(!samePasswords){
        return new AppError(
            'THE PASSWORD DONT MATCH',
            StatusCodes.BAD_REQUEST,
            true
        )
    }

    data.password = undefined

    return{
        data,
        token: await tokenSign(data)
    }

}


const getInfo = async(id, password, newPassword) => {
    const data = await Users.findOne({
        where:{
            id,
            status:"active"
        }
    });
    data.password = undefined

    return data
}


const updatePassword = async(body) => {
    
    const { id, password, newPassword } = body 


      const data = await Users.findOne({
        where:{
            id,
            status:"active"
        }
    })

    const samePasswords = await compare(password, data.password)

    if(!samePasswords){
        new AppError(
            'PASSWORDS DONT MATCH',
            StatusCodes.BAD_REQUEST,
            true
        )
    }


    //TODO TERMINAR FUNCIONALIDAD


    return data

}


module.exports = {
    login,
    register,
    getInfo,
    updatePassword,
}