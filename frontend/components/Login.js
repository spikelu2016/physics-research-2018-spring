import React from 'react';
import PropTypes from 'prop-types';

const Login = ( {} ) => {
    return (
        <div className="login-wrapper">
          <div className="login-title">
            chatbox
          </div>
          <input
            type="text"
            className="login-username"
            placeholder="username"/>
          <input
            type="password"
            className="login-password"
            placeholder="password"/>
          <div
            type="button"
            className="login-button">
            Log In
          </div>
          <div
            className="login-signup-forgot-password">
            Forgot your password?
          </div>
          <div
            className="login-signup-account">
            Don't have an account?&nbsp;
            <span
              className="login-signup-text">
            Sign up
            </span>
          </div>
        </div>
    );
};

Login.propTypes = {
};


export default Login;
