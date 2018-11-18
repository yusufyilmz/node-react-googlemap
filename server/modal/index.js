const Joi = require('joi');

module.exports = {
    address: Joi.object().keys({
        address: Joi.string().required(),
    }),
    geocode: Joi.object().keys({
        lng: Joi.string().regex(/^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/).required(),
        lat: Joi.string().regex(/^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/).required()
    })
} 