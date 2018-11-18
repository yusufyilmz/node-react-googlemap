import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.input`
    width: 100px;
    margin-left:20px;
    margin-right:20px;
    cursor:pointer;
    border-radius: 5px;
    height:30px;
    width: 50%;
    
`;

InputWrapper.displayName = 'Input';


const Input = ({ type, onChange, value }) => {
    return (
        <InputWrapper type={type} onChange={onChange} value={value}></InputWrapper>
    )
}


Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};


export default Input;
