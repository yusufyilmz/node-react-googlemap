import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
    background-image: url('https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png');
    margin-top: -35px;
    display: block;
    height: 40px; 
    width: 40px; 
    position: absolute;
    background-repeat: no-repeat
`;

const Marker = props => (
    <Div
        alt={props.address}
        {...props.onClick ? { onClick: () => props.onClick(props.id) } : {}}
    />
);

Marker.defaultProps = {
    onClick: null,
};

Marker.propTypes = {
    onClick: PropTypes.func,
    address: PropTypes.string.isRequired,
};

export default Marker;