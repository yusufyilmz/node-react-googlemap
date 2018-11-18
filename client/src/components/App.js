import React, { Fragment } from 'react';
import styled from 'styled-components';
import MapContainer from '../containers/MapContainer';
import LocationListContainer from '../containers/LocationListContainer';
import AddLocationContainer from '../containers/AddLocationContainer';
import Button from '../components/Button';
import AddLocationModal from '../components/AddLocationModal';
import ErrorContainer from '../containers/ErrorContainer';
import LoaderContainer from '../containers/LoaderContainer';
import { LocationList } from '../components/LocationList';
import { Map } from './Map';

const ContainerWrapper = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

const Main = styled.main`
  display: flex;
`;


const MapBaseComponent = () => (
  <MapContainer>
    {({ locations, removeMarker, addMarker }) => (
      <Map
      locations={locations}
        addMarker={addMarker}
        removeMarker={removeMarker} />
    )}
  </MapContainer>
)


const AddLocationBaseComponent = () => (
  <AddLocationContainer >
    {({ addLocation, isOpen, closeModal, openModal }) => (
      <Fragment>
        <AddLocationModal addLocation={addLocation}
          isOpen={isOpen}
          closeModal={closeModal}>
          Address
          </AddLocationModal>
        <Button onClick={openModal}>Add location</Button>
      </Fragment>
    )}
  </AddLocationContainer>
)

const LocationListBaseComponent = () => (
  <LocationListContainer>
    {({ deleteLocation, locations }) => (
      <Fragment>
        <hr />
        <LocationList
          locations={locations}
          deleteLocation={deleteLocation} />
      </Fragment>
    )}
  </LocationListContainer>
)

const UtilsBaseComponent = () => (
  <Fragment>
    <ErrorContainer />
    <LoaderContainer />
  </Fragment>
)

const App = () => {
  return (
    <Main>
      <MapBaseComponent />
      <ContainerWrapper>
        <UtilsBaseComponent />
        <AddLocationBaseComponent />
        <LocationListBaseComponent />
      </ContainerWrapper>
    </Main>
  );
}

export default App;