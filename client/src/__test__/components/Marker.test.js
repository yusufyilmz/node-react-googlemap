

import React from 'react';
import Marker from '../../components/Marker';
import { shallow } from 'enzyme'



describe('Marker component', () => {


    test('renders element correctly', () => {

        const address = 'test';
        const onClick = jest.fn();
        const wrapper = shallow(
            <Marker id={1} onClick={onClick} address={address}/>
        );

        expect(wrapper.props().alt).toBe(address)
    });


    // test('renders correctly', () => {
//     const tree = renderer
//         .create(<Input ></Input>)
//         .toJSON();
//     expect(tree).toMatchSnapshot();
// });

})
