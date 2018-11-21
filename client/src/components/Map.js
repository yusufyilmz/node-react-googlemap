import React, { Fragment } from 'react';
import uniqueid from 'lodash.uniqueid';
import Marker from './Marker';
import GoogleMap from './GoogleMap';
import MapContainer from '../containers/MapContainer';
import { BERLIN_CENTER } from '../constants/locations';

export const Map = () => (
    <div>
        <MapContainer>
            {({ locations, removeMarker, addMarker }) => (
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
            )}
        </MapContainer>
    </div>
)

