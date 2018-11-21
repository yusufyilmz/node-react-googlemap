
import React, { Fragment, Component } from 'react';
import Button from './Button';
import Input from './Input';
import Modal from './Modal';
import styled from 'styled-components';
import AddLocationContainer from '../containers/AddLocationContainer';

const H1 = styled.h1`
    margin-left: 20px;
`;


export const AddLocation = () => (
    <AddLocationContainer >
      {({ addLocation, isOpen, closeModal, openModal, location, onChange, title }) => (
        <Fragment>
            <Modal isOpen={isOpen} closeModal={closeModal} >
                <Fragment>
                    <div>
                        <H1>{title}</H1>
                        <Input type="text" onChange={onChange} value={location} />
                        <Button onClick={addLocation} >Add location</Button>
                    </div>
                </Fragment>
            </Modal>

          <Button onClick={openModal}>Add location</Button>
        </Fragment>
      )}
    </AddLocationContainer>
  )

