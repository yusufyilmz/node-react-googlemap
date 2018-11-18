import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';


const BounceDelay = keyframes`
0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
`;

const SpinnerWrapper = styled.div`
    margin: 100px auto 0;
    text-align: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    & > div {
        width: 18px;
        height: 18px;
        background-color: #333;
        border-radius: 100%;
        display: inline-block;
        -webkit-animation: ${BounceDelay} 1.4s infinite ease-in-out both;
        animation: ${BounceDelay} 1.4s infinite ease-in-out both;
      }
`;


const Bouncer1Wrapper = styled.div`
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;`;

const Bouncer2Wrapper = styled.div`
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
`;

const Bouncer3Wrapper = styled.div`
    margin: 100px auto 0;
    width: 70px;
    text-align: center;
`;

const Spinner = () => (
    <SpinnerWrapper>
        <Bouncer1Wrapper />
        <Bouncer2Wrapper />
        <Bouncer3Wrapper />
    </SpinnerWrapper>
);

export default Spinner;