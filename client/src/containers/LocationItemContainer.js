import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteLocation, editLocation } from '../actions';

class LocationItemContainer extends Component {

    state = {
        edit: false,
        address: this.props.address
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.error || nextProps.locationEdited) {
            this.changeMode();
        }
    }

    changeAddress = (e) => {
        this.setState({ address: e.target.value })
    }

    changeMode = () => {
        this.setState(currentState => {
            return { ...currentState, edit: !currentState.edit, address: this.props.address }
        })
    }

    deleteLocation = (id) => {
        this.props.deleteLocation(id);
    }

    editLocation = () => {
        if(this.state.address !== this.props.address) {
            this.props.editLocation({ id: this.props.id, address: this.state.address });
        }
    }

    getStateAndHelpers() {
        return {
            edit: this.state.edit,
            address: this.state.address,
            changeMode: this.changeMode,
            deleteLocation: this.deleteLocation,
            editLocation: this.editLocation,
            onChangeAddress: this.changeAddress
        }
    }

    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}

const mapStateToProps = (state) => {
    return {
        locationEdited: state.map.locationEdited,
        error: state.map.editError
    }
}


export default connect(mapStateToProps, { deleteLocation, editLocation })(LocationItemContainer);