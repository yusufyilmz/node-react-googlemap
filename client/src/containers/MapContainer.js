import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  addLocation, deleteLocation } from '../actions';

class MapContainer extends Component {

    addMarker = (marker) => {
        this.props.addLocation(marker);
    }

    removeMarker = (marker) => {
        this.props.deleteLocation(marker);
    }

    getStateAndHelpers() {
        return {
            locations: this.props.locations,
            addMarker: this.addMarker,
            removeMarker: this.removeMarker,
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


export default connect(mapStateToProps, { addLocation, deleteLocation })(MapContainer);