
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import Error from '../components/Error';

class ErrorContainer extends Component {

    render() {
        return (
            <Fragment>
                {(this.props.addError || this.props.editError ) && 
                <Error><strong>{this.props.errorMessage}</strong></Error>}
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        addError: state.map.addError,
        editError: state.map.editError,
        errorMessage: state.map.errorMessage
    }
}

export default connect(mapStateToProps, null)(ErrorContainer);