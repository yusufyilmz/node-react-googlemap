
import React, { Fragment, Component } from 'react';
import Button from './Button';
import Input from './Input';
import Modal from './Modal';
import styled from 'styled-components';

const H1 = styled.h1`
    margin-left: 20px;
`;

class AddLocationModal extends Component {

    state = {
        location: '',
    }

    changeLocation = (e) => {
        this.setState({ location: e.target.value })
    }

    onClick = () => {
        this.setState({ location: '' },
            this.props.addLocation(this.state.location)
        )
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} closeModal={this.props.closeModal} >
                <Fragment>
                    <div>
                        <H1>{this.props.children}</H1>
                        <Input type="text" onChange={this.changeLocation} value={this.state.location} />
                        <Button onClick={this.onClick} >Add location</Button>
                    </div>
                </Fragment>
            </Modal>
        )
    }
}


export default AddLocationModal;