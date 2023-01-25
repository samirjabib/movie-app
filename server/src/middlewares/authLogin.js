const { verifyToken } = require("../helpers/handleJwt")
const { Users } = require("../models/sql/user.model")



const authMiddleware = async(req, res, next) => {
    try {
        if(!req.headers.authorization){
            return next(new AppError('invalid session', 403));
        }

        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);
        if(!dataToken.id){
            return next(new AppError("ERROR_ID_TOKEN", 401));
        }

        const user = await userModel.findById(dataToken.id)
        req.user = user

        next()
    } catch (error) {
        console.log(error)
        next(error)
    }
}




module.exports = {
    authMiddleware
}