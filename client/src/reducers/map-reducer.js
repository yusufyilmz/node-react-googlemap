import * as actionTypes from '../constants/actionTypes';

const initialState = {
    locations: [],
    editError: false,
    addError: false,
    errorMessage: '',
    loading: false,
    locationEdited: false,
}

const resetState = {
    addError: false,
    editError: false,
    loading: false,

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
               ...resetState
            }
        case actionTypes.ADD_LOCATION_ERROR:
            return {
                ...state,
                addError: true,
                errorMessage: action.payload.message,
                loading: false
            }
        case actionTypes.EDIT_LOCATION_ERROR:
            return {
                ...state,
                editError: true,
                errorMessage: action.payload.message,
                loading: false
            }
        case actionTypes.LOCATION_REQUEST:
            return {
                ...state,
                loading: true,
                addError: false,
                editError: false,
            }
        case actionTypes.EDIT_LOCATION_SUCCESS:
            let { locations } = state
            locations = locations.map(function (item) { return item.id === action.payload.id ? action.payload : item; });
          
            return {
                ...state,
                locations,
                ...resetState,
                locationEdited: true,
            }

        default:
            return state;
    }
}