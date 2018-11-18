import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
  width: 18rem;
  margin: 20px;
`;

const H3 = styled.h3`
    color: #007bff;
`;

H3.displayName = 'header'


const LocationItem = ({ address, lat, lng, children }) => {
    return (
        <Div>
            <H3>{address}</H3>
            <p> Latitude : <label>{lat}</label> </p>
            <p >Longitude : <label>{lng}</label></p>
            {children}
        </Div>
    );
};


LocationItem.propTypes = {
    address: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired

};

export default LocationItem;