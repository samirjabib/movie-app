const Joi = require('joi')

const userShema = Joi.object({
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

