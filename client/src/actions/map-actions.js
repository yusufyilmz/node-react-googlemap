

import * as actionTypes from '../constants/actionTypes';
import Api from '../api/geocoding';

export const deleteLocation = location => {
    return {
        type: actionTypes.DELETE_LOCATION,
        payload: location
    }
}

export function addLocationRequest() {
    return {
        type: actionTypes.ADD_LOCATION_REQUEST
    }
}

export function addLocationSuccess(response) {
    return {
        type: actionTypes.ADD_LOCATION_SUCCESS,
        payload: response
    }
}

export function addLocationError(error) {
    return {
        type: actionTypes.ADD_LOCATION_ERROR,
        payload: error
    }
}

export const addLocation = geocode => (dispatch, getState) => {

    dispatch(addLocationRequest())

    return Api.getAddress(geocode).then((response) => {
        dispatch(addLocationSuccess(response))
    }).catch((error) => {
        dispatch(addLocationError(error))
    })
}

export const addLocationWithAddress = location => (dispatch, getState) => {

    dispatch(addLocationRequest())

    return Api.getGeocoding(location).then((response) => {
        dispatch(addLocationSuccess(response))
    }).catch((error) => {
        dispatch(addLocationError(error))
    })
}