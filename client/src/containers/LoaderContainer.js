
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';

class LoaderContainer extends Component {

    render() {
        return (
            <Fragment>
                {this.props.loading && <Spinner/>}
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.map.loading
    }
}

export default connect(mapStateToProps, null)(LoaderContainer);