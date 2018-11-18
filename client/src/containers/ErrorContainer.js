
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import Error from '../components/Error';

class ErrorContainer extends Component {

    render() {
        return (
            <Fragment>
                {this.props.error && <Error><strong>{this.props.errorMessage}</strong></Error>}
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        error: state.map.error,
        errorMessage: state.map.errorMessage
    }
}

export default connect(mapStateToProps, null)(ErrorContainer);