import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
`;

ErrorWrapper.displayName = 'Error';


const Error = ({ children }) => {
    return (
        <ErrorWrapper>
          {children}
        </ErrorWrapper>
    )
}



export default Error;
