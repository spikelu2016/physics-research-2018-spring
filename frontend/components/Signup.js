import React from 'react';
import PropTypes from 'prop-types';

const Signup = ( {} ) => {
    return (
        <div className="signup-wraper">
          <div className="signup-title">
            chatbox
          </div>
          <div>
            Sign up to chat with your friends
          </div>
          <input
            type="text"
            className="signup-username"
            placeholder="username"/>
          <input
            type="password"
            className="signup-password"
            placeholder="password"/>
          <div
            type="button"
            className="signup-button">
            Log In
          </div>
        </div>
    );
};

Signup.propTypes = {
};


export default Signup;
