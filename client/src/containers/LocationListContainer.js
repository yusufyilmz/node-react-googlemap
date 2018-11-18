import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteLocation, addLocationWithAddress } from '../actions';

class LocationListContainer extends Component {


    addLocation = (location) => {
        this.props.addLocationWithAddress(location);
    }

    deleteLocation = (id) => {
        this.props.deleteLocation(id);
    }

    getStateAndHelpers() {
        return {
            deleteLocation: this.deleteLocation,
            addLocation: this.addLocation,
            locations: this.props.locations,
        }
    }

    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}


const mapStateToProps = (state) => {
    return {
        locations: state.map.locations
    }
}

export default connect(mapStateToProps, { deleteLocation, addLocationWithAddress })(LocationListContainer);