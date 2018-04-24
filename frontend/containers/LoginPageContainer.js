import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Login from '../components/Login';

class LoginPageContainer extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="main-container-bg-pic">
        <div className="main-container-wrapper">
          <Login history={this.props.history}/>
        </div>
      </div>
    );
  }
}

LoginPageContainer.propTypes = {
};

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
)(LoginPageContainer);
