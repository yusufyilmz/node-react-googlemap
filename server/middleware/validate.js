const Joi = require('joi');
const { address, geocode } = require('../modal')

const validateGeocodingInput = async (req, res, next) => {

    try {
        var response = await Joi.validate(req.query, address);
        req.data = response
        next();
    }
    catch (e) {
        res.status(404).json({
            status : 404,
            message: 'Invalid request parameter'
        });
    }
}


const validateAddressInput = async (req, res, next) => {

    try {
        var response = await Joi.validate(req.query, geocode);
        req.data = response
        next();
    }
    catch (e) {
        res.status(404).json({
            status : 404,
            message: 'Invalid request parameter'
        });
    }
}

module.exports = {
    validateAddressInput,
    validateGeocodingInput
}