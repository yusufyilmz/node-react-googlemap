

import React from 'react';
import LocationItem from '../../components/LocationItem';
import { shallow } from 'enzyme'


describe('locationItem component', () => {

    test('renders elements correctly', () => {

        const address = 'address';
        const lat = 2;
        const lng = 1;

        const wrapper = shallow(
            <LocationItem 
            onChangeAddress={jest.fn()} 
            deleteLocation={jest.fn()}  editLocation={jest.fn()} changeMode={jest.fn()} 
            address={address} lat={lat} lng={lng} onCli ></LocationItem>
        );
        expect(wrapper.find('header').text()).toBe(address);
        expect(wrapper.find('p').length).toBe(2);

    });

    // test('renders onclick correctly', () => {

    //     const text = 'Click me';
    //     const onClick = jest.fn();
    //     const wrapper = shallow(
    //         <Button onClick={onClick}><p>{text}</p></Button>
    //     );

    //     wrapper.find('Button').simulate('click');
    //     expect(onClick.mock.calls.length).toEqual(1);
    //     });

})