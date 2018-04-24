import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Signup from '../components/Signup';

class SignupPageContainer extends Component {
  constructor(props) {
    super(props)
    console.log(props);
  }
  render() {
    return (
      <div className="main-container-bg-pic">
        <div className="main-container-wrapper">
          <Signup history={this.props.history}/>
        </div>
      </div>
    );
  }
}

SignupPageContainer.propTypes = {
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
)(SignupPageContainer);
