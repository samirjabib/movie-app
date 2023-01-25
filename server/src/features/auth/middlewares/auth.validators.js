const Joi = require('joi')

const registerSchema = Joi.object({
    displayName:Joi.string()
        .min(3)
        .max(40)
        .required(),
    email:Joi.string()
        .email()
        .min(3)
        .max(30)
        .required(),
    password:Joi.string()
        .min(3)
        .max(30)
        .required(),
    role:Joi.string()
        .optional()
})

const loginSchema = Joi.object({
    email:Joi.string()
        .email()
        .min(3)
        .max(30),
    password:Joi.string()
        .min(3)
        .max(50)
        .required()
})

const validateRegister = ( req, res, next ) => {
    const data = req.body

    const { error } = registerSchema.validate(data, { abortEarly: false } )

    if(error){
        return res.json({ error: error.details })
    }

    next()
}

const validateLogin = (req, res, next) => {

    const data = req.body
    const { error } = loginSchema.validate( data, { abortEarly:false })

    if(error){
        return res.json( { error: error.details })
    }

    next()
}

module.exports = { validateRegister, validateLogin }