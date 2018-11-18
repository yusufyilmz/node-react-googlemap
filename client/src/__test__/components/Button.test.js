

import React from 'react';
import Button from '../../components/Button';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

// test('renders correctly', () => {
//     const tree = renderer
//         .create(<Button ></Button>)
//         .toJSON();
//     expect(tree).toMatchSnapshot();
// });


describe('Button component', () => {




    // test('renders children correctly', () => {
    //     const text = 'Click me';
    //     const wrapper = shallow(
    //         <Button >{text}</Button>
    //     );
    //     expect(wrapper.text).toEqual(text);
    // });

    test('renders children correctly', () => {

        const text = 'Click me';
        const onClick = jest.fn();
        const wrapper = shallow(
            <Button onClick={onClick}><p>{text}</p></Button>
        );
        // let props = wrapper.find('p').props()
        expect(wrapper.find('p').text()).toBe(text);
    });


    test('renders onclick correctly', () => {

        const text = 'Click me';
        const onClick = jest.fn();
        const wrapper = shallow(
            <Button onClick={onClick}><p>{text}</p></Button>
        );

        wrapper.find('Button').simulate('click');
        expect(onClick.mock.calls.length).toEqual(1);
        });

})