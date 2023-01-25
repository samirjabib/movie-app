const checkRol = (roles) => (req, res, next) => {
    try {
        const { user } = req
        const rolesByUser = user.role
        console.log(rolesByUser)
        const checkValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle))
        if(!checkValueRol){
            return next(
             new AppError('DONT_HAVE_ACCESS', 403)
            )
        }
        next()
    } catch (error) {
        next(error)
    }
}


module.exports = {
    checkRol
}