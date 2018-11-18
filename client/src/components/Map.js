import React, { Fragment } from 'react';
import uniqueid from 'lodash.uniqueid';
import Marker from './Marker';
import GoogleMap from './GoogleMap';
import { BERLIN_CENTER } from '../constants/locations';


export const Map = ({ locations, removeMarker, addMarker }) => (
    <div>
        <GoogleMap
            defaultZoom={10}
            defaultCenter={BERLIN_CENTER}
            onClick={addMarker} >
            {locations.map(location => (
                <Marker
                    key={uniqueid()}
                    address={location.address}
                    id={location.id}
                    lat={location.lat}
                    lng={location.lng}
                    onClick={removeMarker} />
            ))}
        </GoogleMap>
    </div>
)

