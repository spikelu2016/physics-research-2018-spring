import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUser } from  '../actions/index';


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }

  redirectChatbox() {
    this.props.history.push('/chatbox');
  }

  redirectSignup() {
    this.props.history.push('/signup');
  }

  handleUserNameChange(e) {
    this.setState({username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleLogin(e) {
    e.preventDefault();
    axios.post('http://localhost:3000/api/login', {
      username: this.state.username,
      password: this.state.password,
    })
    .then((r) => {
      if(r.data.error) {
        this.setState({
          usernameFieldErrorText: r.data.error,
          passwordFieldErrorText: r.data.error
        })
      } else {
        this.props.setUserAction(r.data.response);

        this.redirectChatbox();
      }
    })
    .catch((err) => {
      console.log("there was an error with the request : ", err);
    })
  }

  render() {
    return (
        <div className="login-wrapper">
          <div className="login-title">
            chatbox
          </div>
          <input
            type="text"
            className="login-username"
            onChange={(e) => this.handleUserNameChange(e)}
            placeholder="username"/>
          <input
            type="password"
            className="login-password"
            onChange={(e) => this.handlePasswordChange(e)}
            placeholder="password"/>
          <div
            type="button"
            onClick={(e) => this.handleLogin(e)}
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
              onClick={(e) => this.redirectSignup(e)}
              className="login-signup-text">
            Sign up
            </span>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    socket: state.socketReducer.socket,
    user: state.userReducer.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUserAction: (user) => {
      dispatch(setUser(user))
    }
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
