const express = require('express');
const router = express.Router();
const addressController  = require('../controller/address');
const geocodeController  = require('../controller/geocode');
const validator =  require( '../middleware/validate');

router.get('/address', validator.validateAddressInput, addressController.getAddress);

router.get('/geocode',  validator.validateGeocodingInput, geocodeController.getGeocode);

module.exports = router;