

import * as actionTypes from '../constants/actionTypes';
import Api from '../api/geocoding';

export const deleteLocation = location => {
    return {
        type: actionTypes.DELETE_LOCATION,
        payload: location
    }
}

export function locationRequest() {
    return {
        type: actionTypes.LOCATION_REQUEST
    }
}

export function addLocationSuccess(response) {
    return {
        type: actionTypes.ADD_LOCATION_SUCCESS,
        payload: response
    }
}

export function editLocationSuccess(response) {
    return {
        type: actionTypes.EDIT_LOCATION_SUCCESS,
        payload: response
    }
}


export function addLocationError(error) {
    return {
        type: actionTypes.ADD_LOCATION_ERROR,
        payload: error
    }
}


export function editLocationError(error) {
    return {
        type: actionTypes.EDIT_LOCATION_ERROR,
        payload: error
    }
}

export const editLocation = ({id, address}) => (dispatch, getState) => {

    dispatch(locationRequest())

    return Api.getGeocoding(address).then((response) => {
        dispatch(editLocationSuccess({...response, id: id}))
    }).catch((error) => {
        dispatch(editLocationError(error))
    })
}

export const addLocation = geocode => (dispatch, getState) => {

    dispatch(locationRequest())

    return Api.getAddress(geocode).then((response) => {
        dispatch(addLocationSuccess(response))
    }).catch((error) => {
        dispatch(addLocationError(error))
    })
}

export const addLocationWithAddress = location => (dispatch, getState) => {

    dispatch(locationRequest())

    return Api.getGeocoding(location).then((response) => {
        dispatch(addLocationSuccess(response))
    }).catch((error) => {
        dispatch(addLocationError(error))
    })
}