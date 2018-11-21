import mapReducer from '../../reducers/map-reducer';
import * as actionTypes from '../../constants/actionTypes';


describe('MAP_REDUCER', () => {

    let initialState;
    let location;

    beforeEach(() => {
         initialState = { addError: false, editError: false, locations: [], errorMessage: '', loading: false, locationEdited: false };
         location = { id: 1, lat: 1, lng: 2, address: 'test' };

    });


    describe('INITIAL_STATE', () => {
        test('is correct', () => {
            const action = { type: 'dummy_action' };
            expect(mapReducer(undefined, action)).toEqual(initialState);
        });
    });


    // describe('INITIAL_STATE', () => {
    //     test('is correct', () => {
    //         const action = { type: 'dummy_action' };

    //         expect(mapReducer(undefined, action)).toMatchSnapshot();
    //     });
    // });


    describe('ADD_LOCATION_SUCCESS', () => {
        test('returns the correct state', () => {
            const action = { type: actionTypes.ADD_LOCATION_SUCCESS, payload: location };
            expect(mapReducer(undefined, action)).toEqual({...initialState,  locations: [location]});
        });
    });

        // describe('ADD_LOCATION_SUCCESS', () => {
    //     test('is correct', () => {
    //         const location = { id: 1, lat: 1, lng: 2, address: 'test' };
    //         const action = { type: actionTypes.ADD_LOCATION, payload: location };
    //         expect(mapReducer(undefined, action)).toMatchSnapshot();
    //     });
    // });



    describe('ADD_LOCATION_ERROR', () => {
        test('returns the correct state', () => {

            var errorMessage= 'error occured';
            var locationWithError = {...location, message : errorMessage, addError: true };
            const action = { type: actionTypes.ADD_LOCATION_ERROR, payload: locationWithError };
            expect(mapReducer(undefined, action)).toEqual({...initialState,  errorMessage, addError: true});
        });
    });



    describe('DELETE_LOCATION', () => {
        test('returns the correct state', () => {
            const action = { type: actionTypes.DELETE_LOCATION, payload: location };
            expect(mapReducer(undefined, action)).toEqual(initialState);
        });
    });



    // describe('DELETE_LOCATION', () => {
    //     test('is correct', () => {
    //         const action = { type: actionTypes.DELETE_LOCATION, payload: location };
    //         expect(mapReducer(undefined, action)).toMatchSnapshot();
    //     });
    // });

})
