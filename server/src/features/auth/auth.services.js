const { Users } = require('../../models/sql/user.model')


const register = async(body) => {

    console.log(body)

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