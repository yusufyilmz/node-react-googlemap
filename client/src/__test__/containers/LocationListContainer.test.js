import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import LocationListContainer from '../../containers/LocationListContainer'
import LocationList from '../../components/LocationList'
import Button from '../../components/Button'
import LocationItem from '../../components/LocationItem'
import { mount, shallow } from 'enzyme'
import { wrap } from 'module';

const initialState = {
    map: {
        locations: [
            {
                id: '1',
                lat: '52.3',
                lng: '13.5',
                address: 'a'
            }
        ]
    }
};

const mockStore = configureStore();


describe('Input component', () => {

    let store, wrapper, actions;


    beforeEach(() => {
        actions = {
            deleteLocation: jest.fn()
        }
        store = mockStore(initialState)
        wrapper = shallow(<LocationListContainer store={store} actions={actions}>
            {({ deleteLocation, locations }) => (
                <LocationList
                    locations={locations}
                    deleteLocation={deleteLocation} />
            )}
        </LocationListContainer>)
    })


    test(" render children", () => {
        let children = wrapper.children();
        console.log(children.length)
        expect(children.length).toBeGreaterThan(0);
    });

})



