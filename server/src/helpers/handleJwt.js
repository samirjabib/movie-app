const jwt = require("jsonwebtoken")
const { config } = require("../config")


const tokenSign = async (user) => {
    const sign = jwt.sign(
        {
            id: user.id,
            role: user.role
        },
        config.JWT_SECRET,
        {
            expiresIn: "2h",
        }
    )

    return sign
}


const verifyToken = async(tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, config.JWT_SECRET)
    } catch (error) {
        console.log(error)
        return null
    }
}


module.exports = {
    tokenSign,
    verifyToken
}