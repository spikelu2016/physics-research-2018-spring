import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom';
import io from 'socket.io-client'


class AppContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

// AppContainer.propTypes = {
//     name: PropTypes.string,
// };

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
