const { getAddressFromGoogleMap } = require('../business/geocodingApi');

const getAddress = async (req, res) => {

    const response = await getAddressFromGoogleMap(req.data)

    if (response.status !== 200) {
        return res.status(response.status).json(response);
    }

    res.status(response.status).json({
        id: response.data.place_id,
        lat: response.data.geometry.location.lat,
        lng: response.data.geometry.location.lng,
        address: response.data.formatted_address
    });
};


module.exports = {
    getAddress
};

