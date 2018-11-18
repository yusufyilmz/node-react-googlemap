import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

const Div = styled.div`
  width: 500px;
  height: 500px;
`;

const GoogleMap = ({ children, ...props }) => (
  <Div>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.REACT_APP_GMAP_KEY,
    }}
      {...props}
    >
      {children}
    </GoogleMapReact>
  </Div>
);

GoogleMap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

GoogleMap.defaultProps = {
  children: null,
};

export default GoogleMap;