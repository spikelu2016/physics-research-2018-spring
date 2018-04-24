import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom';
import io from 'socket.io-client';
import { setSocket } from '../actions/index';


class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.socket = io();
    this.props.setSocketAction(this.socket);
  }
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

AppContainer.propTypes = {
};

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSocketAction: (socket) => {
      dispatch(setSocket(socket))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
