import axios from 'axios';

export default {
    async getAddress(location) {

        try {
            const url = `${process.env.REACT_APP_GAPI_URL}/api/address?lat=${location.lat}&lng=${location.lng}`;
            // const response = await axios.post(url, {
            //     lat: `${location.lat}`,
            //     lng: `${location.lng}`
            // });
            const response = await axios.get(url);
            return response.data;
        }
        catch (e) {
            throw new Error((e.response && e.response.data ) ? e.response.data.message : "An error occured");
        }

    },
    async getGeocoding(address) {

        try {
            
            const url = `${process.env.REACT_APP_GAPI_URL}/api/geocode?address=${address.split(' ').join(',')}`;
            // const response = await axios.post(url, {
            //     address: `${address.split(' ').join(',')}`
            // });
            const response = await axios.get(url);
            return response.data;
        }
        catch (e) {
            throw new Error((e.response && e.response.data ) ? e.response.data.message : "An error occured");
        }

    }
}
