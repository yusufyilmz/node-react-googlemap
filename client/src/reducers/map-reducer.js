import * as actionTypes from '../constants/actionTypes';

const initialState = {
    locations: [],
    error: false,
    errorMessage: '',
    loading: false
}

export default function (state = initialState, action) {

    switch (action.type) {
        case actionTypes.DELETE_LOCATION:
            return {
                ...state,
                locations: state.locations.filter(item => item.id !== action.payload),
                error: false,
                loading: false
            }
        case actionTypes.ADD_LOCATION_SUCCESS:
            return {
                ...state,
                locations: [...state.locations, action.payload],
                error: false,
                loading: false
            }
        case actionTypes.ADD_LOCATION_ERROR:
            return {
                ...state,
                error: true,
                errorMessage: action.payload.message,
                loading: false
            }
        case actionTypes.ADD_LOCATION_REQUEST:
            return {
                ...state,
                error: false,
                loading: true
            }
        default:
            return state;
    }
}