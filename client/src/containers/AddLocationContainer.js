
import React, { Fragment, Component } from 'react';
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
            return { error:false, isOpen: !currentState.isOpen }
        })
    }

    addLocation = (location) => {
        this.props.addLocationWithAddress(location)
        this.setState({ isOpen: false, location });
    }

    closeModal = () => {
        this.setState({ isOpen: false })
    }


    getStateAndHelpers() {
        return {
            addLocation: this.addLocation,
            isOpen: this.state.isOpen,
            closeModal: this.closeModal,
            openModal: this.openModal
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