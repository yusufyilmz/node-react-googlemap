import React, { Fragment } from 'react';
import Location from './LocationItem'
import uniqueid from 'lodash.uniqueid';
import styled from 'styled-components';
import Button from './Button';

const RowWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;

export const LocationList = ({ locations, deleteLocation }) =>
    <RowWrapper>
        {locations.map(location => {
            return (
                <Location key={uniqueid()}
                    {...location} >
                    <Fragment>
                        <Button id="123" onClick={() => deleteLocation(location.id)} type="button"> Delete</Button>
                    </Fragment>
                </Location>
            )
        })}
    </RowWrapper>

