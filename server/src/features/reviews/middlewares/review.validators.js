const Joi = require('joi')

const reviewSchema = Joi.object({
    content:Joi.string()
        .min(3)
        .max(300)
        .required(),
    mediaType:Joi.object().keys({
        type:Joi.string().valid(["tv", "movies"])
    })
    .required(),
    mediaId:Joi.string()
        .min(1)
        .max(100)
        .required(),
    mediaTitle:Joi.string()
        .min(3)
        .max(300)
        .required(),
    mediaPoster:Joi.string()
        .min()
        .max(300)
        .required()

})

