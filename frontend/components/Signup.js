import React from 'react';
import PropTypes from 'prop-types';

const Signup = ( {} ) => {
    return (
        <div className="signup-wrapper">
          <div className="signup-title">
            chatbox
          </div>
          <div className="signup-slogan">
            Sign up to chat with your friends.
          </div>
          <input
            type="text"
            className="signup-email"
            placeholder="email"/>
          <input
            type="text"
            className="signup-fullname"
            placeholder="fullname"/>
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
            Sign Up
          </div>
          <div
            className="signup-login-account">
            Have an account?&nbsp;
            <span
              className="signup-login-text">
            Log In
            </span>
          </div>
        </div>
    );
};

Signup.propTypes = {
};


export default Signup;