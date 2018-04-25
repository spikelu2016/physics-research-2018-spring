import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUser } from  '../actions/index';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      profilepics: ["http://res.cloudinary.com/dclmhv0zu/image/upload/v1523040961/555cd827049321.5635f4f5b110f.png",
                    "http://res.cloudinary.com/dclmhv0zu/image/upload/v1524609869/6.png",
                    "http://res.cloudinary.com/dclmhv0zu/image/upload/v1524609869/1.png",
                    "http://res.cloudinary.com/dclmhv0zu/image/upload/v1524609869/5.png",
                    "http://res.cloudinary.com/dclmhv0zu/image/upload/v1524609869/4.png",
                    "http://res.cloudinary.com/dclmhv0zu/image/upload/v1524609869/3.png",
                    "http://res.cloudinary.com/dclmhv0zu/image/upload/v1524609869/2.png"]
    }
  }

  redirectChatbox() {
    this.props.history.push('/chatbox');
  }

  redirectLogin() {
    this.props.history.push('/');
  }

  handleFullNameChange(e) {
    var fullname = e.target.value.split(" ");
    if (fullname.length === 3) {
      var firstname = fullname[0];
      var lastname = fullname[fullname];
      this.setState({firstname: firstname});
      this.setState({lastname: lastname});
    } else if (fullname.length === 2) {
      var firstname = fullname[0];
      var lastname = fullname[1];
      this.setState({firstname: firstname});
      this.setState({lastname: lastname});
    }
  }

  handleEmailNameChange(e) {
    this.setState({email: e.target.value});
  }

  handleUserNameChange(e) {
    this.setState({username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleRegister(e) {
    e.preventDefault();
    var randomNum = Math.floor(Math.random()*this.state.profilepics.length)
    console.log(randomNum);
    var port = process.env.PORT;
    axios.post('http://localhost:' + port + '/api/register', {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      profilepic: this.state.profilepics[randomNum]
    })
    .then((r) => {
      if(r.data.error) {
        r.data.error.forEach((err) => {
          console.log("there was an error registering: ", r.data);
          console.log("r.data.error", r.data.error);
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
            onChange={(e) => this.handleEmailNameChange(e)}
            placeholder="email"/>
          <input
            type="text"
            className="signup-fullname"
            onChange={(e) => this.handleFullNameChange(e)}
            placeholder="fullname"/>
          <input
            type="text"
            className="signup-username"
            onChange={(e) => this.handleUserNameChange(e)}
            placeholder="username"/>
          <input
            type="password"
            className="signup-password"
            onChange={(e) => this.handlePasswordChange(e)}
            placeholder="password"/>
          <div
            type="button"
            onClick={(e) => this.handleRegister(e)}
            className="signup-button">
            Sign Up
          </div>
          <div
            className="signup-login-account">
            Have an account?&nbsp;
            <span
              onClick={() => this.redirectLogin()}
              className="signup-login-text">
            Log In
            </span>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return{
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
)(Signup);
