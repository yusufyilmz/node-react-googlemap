import * as actionTypes from '../../constants/actionTypes';
import * as actions from '../../actions';
import expect from 'expect'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import moxios from 'moxios';

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);


describe('MAP_ACTIONS', () => {

    let location;

    beforeEach(() => {
        location = {
            id: "ChIJMS5kyJ5XqEcRCvLhnTBVXiI",
            lat: 52.4970088,
            lng: 13.2029198,
            address: "Havelchaussee, 14193 Berlin, Germany"
        }
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });

    test('delete location with success ', () => {

        const location = { lat: 1, lng: 2 }
        const expectedActions =
        {
            'payload': location,
            'type': actionTypes.DELETE_LOCATION,
        }

        expect(actions.deleteLocation(location)).toEqual(expectedActions)
    });


    test('addlocation with success', () => {


        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: location,
            });
        });

        const expectedActions = [
            { type: actionTypes.ADD_LOCATION_REQUEST },
            { type: actionTypes.ADD_LOCATION_SUCCESS, payload: location }
        ];

        const store = mockStore({ locations: [] })
        return store.dispatch(actions.addLocation(location)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });


    test('addlocation with error', () => {

        const location = {
            id: "ChIJMS5kyJ5XqEcRCvLhnTBVXiI",
            lat: 52.4970088,
            lng: 13.2029198,
            address: "Havelchaussee, 14193 Berlin, Germany"
        }

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 400,
                response: location,
            });
        });

        const expectedActions = [actionTypes.ADD_LOCATION_REQUEST, actionTypes.ADD_LOCATION_ERROR];

        const store = mockStore({ locations: [] })
        return store.dispatch(actions.addLocation({ lat: location.lat, lng: location.lng })).then(() => {
            expect(store.getActions().map(x => x.type)).toEqual(expectedActions);
        });
    });


    test('addlocationWithAddress with success', () => {

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: location,
            });
        });

        const expectedActions = [
            { type: actionTypes.ADD_LOCATION_REQUEST },
            { type: actionTypes.ADD_LOCATION_SUCCESS, payload: location }
        ];

        const store = mockStore({ locations: [] })
        return store.dispatch(actions.addLocationWithAddress(location.address)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    
    test('addlocationWithAddress with error', () => {

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 400,
                response: location,
            });
        });

        const expectedActions = [actionTypes.ADD_LOCATION_REQUEST, actionTypes.ADD_LOCATION_ERROR];

        const store = mockStore({ locations: [] })
        return store.dispatch(actions.addLocationWithAddress(location.address)).then(() => {
            expect(store.getActions().map(x => x.type)).toEqual(expectedActions);
        });
    });

});
