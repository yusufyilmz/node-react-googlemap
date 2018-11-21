import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonWrapper = styled.button`
    width: 100px;
    margin-right: 10px;
    background-color: Transparent;
    cursor:pointer;
    border-radius: 5px
    height:30px
`;

ButtonWrapper.displayName = 'Button';

const Button = ({ id, onClick, color, children }) => {
    return (
        <ButtonWrapper id={id} style={{ color }} onClick={onClick}><span>{children}</span></ButtonWrapper>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string,
};

Button.defaultProps = {
    color: 'black'
};


export default Button;
