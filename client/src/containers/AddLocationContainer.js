
import React, {  Component } from 'react';
import { connect } from 'react-redux';
import { addLocationWithAddress} from '../actions'

class AddLocationContainer extends Component {


    state = {
        isOpen: false,
        location: '',
        error: false
    }

    openModal = () => {
        this.setState((currentState) => {
            return { error:false, isOpen: !currentState.isOpen,  location: '' }
        })
    }

    addLocation = () => {
        this.props.addLocationWithAddress(this.state.location)
        this.setState({ isOpen: false });
    }

    closeModal = () => {
        this.setState({ isOpen: false, location: '' })
    }

    onChange = (e) => {
        this.setState({ location: e.target.value })
    }

    getStateAndHelpers() {
        return {
            addLocation: this.addLocation,
            isOpen: this.state.isOpen,
            closeModal: this.closeModal,
            openModal: this.openModal,
            onChange: this.onChange,
            location: this.state.location,
            title: "Address"
        }
    }

    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}


const mapStateToProps = (state) => {
    return {
        error: state.map.error
    }
}

export default connect(mapStateToProps, {addLocationWithAddress})(AddLocationContainer);