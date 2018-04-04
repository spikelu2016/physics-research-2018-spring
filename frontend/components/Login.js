import React from 'react';
import PropTypes from 'prop-types';

const Login = ( {} ) => {
    return (
        <div className="login-wraper">
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
          <button
            type="button">
            Login
          </button>
        </div>
    );
};

Login.propTypes = {
};


export default Login;
