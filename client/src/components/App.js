import React, { Fragment } from 'react';
import styled from 'styled-components';
import { AddLocation } from '../components/AddLocation';
import { Map } from './Map';
import { LocationList } from './LocationList';
import ErrorContainer from '../containers/ErrorContainer';
import LoaderContainer from '../containers/LoaderContainer';

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


const App = () => {
  return (
    <Main>
      <Map />
      <ContainerWrapper>
        <ErrorContainer />
        <LoaderContainer />
        <AddLocation />
        <LocationList />
      </ContainerWrapper>
    </Main>
  );
}

export default App;