const axios = require('axios');

const getAddressFromGoogleMap = async ({ lat, lng }) => {

    let result = {};

    try {
        const url = `${process.env.GEOCODING_URL}/json?latlng=${lat},${lng}&key=${process.env.GEOCODING_SECRET}`;

        const response = await axios.get(url);

        if (response.status !== 200 || response.data.status !== 'OK' || response.data.results.length < 1) {
            result.status = 404;
            result.message = `Specified "${lat}" , "${lng}" geocode not found`;
        }
        else {
            result.status = 200;
            result.data = response.data.results[0];
        }
    }
    catch (e) {
        result.status = 400;
        result.message = `An exception has been thrown by server`;
    }

    return result;
}


const getGeocodeFromGoogleMap = async ({ address }) => {

    let result = {};

    try {
        const url = `${process.env.GEOCODING_URL}/json?address=${address}&key=${process.env.GEOCODING_SECRET}`;
      
        const response = await axios.get(url);

        if (response.status !== 200 || response.data.status !== 'OK' || response.data.results.length < 1) {
            result.status = 404;
            result.message = `Specified "${address}" location not found`;
        }
        else {
            result.status = 200;
            result.data = response.data.results[0];
        }
    }
    catch (e) {
        result.status = 400;
        result.message = `An exception has been thrown by server`;
    }

    return result;
}




module.exports = {
    getAddressFromGoogleMap,
    getGeocodeFromGoogleMap
}