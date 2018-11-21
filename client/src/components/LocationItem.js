import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';

const Div = styled.div`
  width: 18rem;
  margin: 20px;
`;

const H3 = styled.h3`
    color: #007bff;
`;

H3.displayName = 'header'


// const LocationItem = ({ address, lat, lng, id, children, deleteLocation }) => {
//     return (
//         <Div>
//             <H3>{address}</H3>
//             <p> Latitude : <label>{lat}</label> </p>
//             <p >Longitude : <label>{lng}</label></p>
//             {/* {children} */}

//             <Button id="123" onClick={() => deleteLocation(id)} type="button"> Edit</Button>
//             <Button id="123" onClick={() => deleteLocation(id)} type="button"> Delete</Button>

//         </Div>
//     );
// };

const LocationItem = ({ address, lat, lng, id, onChangeAddress, deleteLocation, editLocation, changeMode, edit }) => {
  
        return (
            <Div>
                {edit ?
                    <Fragment>
                        <Input type="text" value={address} onChange={onChangeAddress}/>
                        <Button onClick={editLocation} type="button"> Submit</Button>
                    </Fragment>
                    :
                    <H3>{address}</H3>
                }
                <p> Latitude : <label>{lat}</label> </p>
                <p >Longitude : <label>{lng}</label></p>
                <Button onClick={() => deleteLocation(id)} type="button"> Delete</Button>
                <Button onClick={changeMode} type="button"> {!edit ? "Edit" : "Cancel"}</Button>
            </Div>
        )
    }

LocationItem.propTypes = {
    address: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired

};

export default LocationItem;