

import React from 'react';
import Input from '../../components/Input';
import { shallow } from 'enzyme'

describe('Input component', () => {

    let value, onChange, wrapper;

    beforeEach(() => {
        value = 'test';
        onChange = jest.fn();
        wrapper = shallow(
            <Input type='text' onChange={onChange} value={value} />
        );
    });


    test('renders element correctly', () => {

        expect(wrapper.props().value).toBe(value)
        expect(wrapper.props().type).toBe('text')

    });


    test('renders onclick correctly', () => {
        wrapper.find('Input').simulate('change');
        expect(onChange.mock.calls.length).toEqual(1);
    });


    // test('renders correctly', () => {
    //     const tree = renderer
    //         .create(<Input ></Input>)
    //         .toJSON();
    //     expect(tree).toMatchSnapshot();
    // });

})
