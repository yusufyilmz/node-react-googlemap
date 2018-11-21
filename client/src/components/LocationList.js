import React, { Fragment } from 'react';
import LocationListContainer from '../containers/LocationListContainer';
import LocationItemContainer from '../containers/LocationItemContainer';
import LocationItem from './LocationItem';
import uniqueid from 'lodash.uniqueid';
import styled from 'styled-components';

const RowWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;

export const LocationList = () => (
  <LocationListContainer>
    {({ locations }) => (
      <Fragment>
        <hr />
        <RowWrapper>
          {locations.map(location => {
            return (
              <LocationItemContainer key={uniqueid()} {...location}>
                {({ deleteLocation, edit, changeMode, onChangeAddress, address, editLocation }) => (
                  <LocationItem {...location}
                    deleteLocation={deleteLocation}
                    onChangeAddress={onChangeAddress}
                    editLocation={editLocation}
                    address={address}
                    changeMode={changeMode}
                    edit={edit} />
                )}
              </LocationItemContainer>
            )
          })}
        </RowWrapper>
      </Fragment>
    )}
  </LocationListContainer>
)