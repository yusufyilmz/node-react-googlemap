import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import ErrorContainer from '../../containers/ErrorContainer'
import Error from '../../components/Error'
import { mount, shallow} from 'enzyme'
import { wrap } from 'module';

const initialState = {
    map: {
        addError: true,
        errorMessage: "error"
    }
};

const mockStore = configureStore();


describe('ErrorContainer component', () => {

    let store, wrapper;


    beforeEach(() => {
        store = mockStore(initialState)
        wrapper = mount(<ErrorContainer store={store} />)
    })


    test(" renders a strong if error is true", () => {
        let children = wrapper.children();
        const spans = children.find('strong');
        expect(spans.length).toBeGreaterThan(0);
    });


})



