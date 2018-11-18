import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
`;

const ModalContentWrapper = styled.div`
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%; 
`

const ModalCloseWrapper = styled.span`
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    `


class Modal extends Component {


    render() {
        return <Fragment>
            {this.props.isOpen &&
                <ModalWrapper >
                    <ModalContentWrapper>
                        <ModalCloseWrapper onClick={this.props.closeModal}>&times;</ModalCloseWrapper>
                        {this.props.children}
                    </ModalContentWrapper>
                </ModalWrapper>
            }
        </Fragment>
    }
}

export default Modal;