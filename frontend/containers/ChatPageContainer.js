import Banner from '../components/Banner';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNewMessage } from  '../actions/index';
import { setAllOnlineUsers } from  '../actions/index';




import { addNewOnlineUser } from  '../actions/index';
import axios from 'axios';






class ChatPageContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: this.props.user.firstname,
      profilepic: this.props.user.profilepic,
      text: ""
    }

    this.props.socket.on('newMessage', (newMessageObj) => {
      this.props.addNewMessageAction(newMessageObj);
    });

    this.props.socket.on('newOnlineUser', (newOnlineUseObj) => {
      this.props.addNewOnlineUserAction(newOnlineUseObj);
    });

  }

  componentWillMount() {
    this.props.socket.emit('join', 'public');
    var port = process.env.PORT;
    axios.post('http://localhost:' + port + '/api/addNewOnlineUser', this.props.user)
    .then((r) => {
      if(r.data.error) {
      } else {
        this.props.setAllOnlineUsersAction(r.data.response);
        this.props.socket.emit('newOnlineUser', this.props.user);
      }
    })
    .catch((err) => {
      console.log("there was an error with the request : ", err);
    })
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    if (this.el) {
      this.el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  handleSendMessage(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      let newMessage = {
        text: this.state.text,
        firstname: this.state.firstname,
        profilepic: this.state.profilepic
      }

      this.props.addNewMessageAction(newMessage);
      this.props.socket.emit('newMessage', newMessage);
      this.setState({text: ""});
    }
  }


  render() {
    return (
        <div>
          <Banner />
          <div className="chat-box-wrapper">
            <div className="chat-box-container">
              <div className="chat-box-people-list-container">


                  {this.props.onlineUsers.map((user, i) => {
                    return (
                      <div className="chat-box-people-list-people">
                        <img className="chat-box-people-list-profile-pic"
                          src={user.profilepic}/>
                        <div className="chat-box-people-list-name">
                          {user.firstname + " " + user.lastname}
                        </div>
                      </div>
                    )
                  })}



              </div>
              <div className="chat-box-chat-container">
                <div className="chat-box-chat-container-chat-space" id="messagesContainer">

              {this.props.messages.map((message, i) => {
                return (
                  <div className="chat-box-chat-container-chat-space-wrapper"
                        ref={el => { this.el = el; }}>
                    <div className="chat-box-chat-container-chat-space-profile-name">
                      <img className="chat-box-chat-container-chat-space-profile"
                      src={message.profilepic}/>
                      <div className="chat-box-chat-container-chat-space-name">
                        {message.firstname}
                      </div>
                    </div>
                    <div className="chat-box-chat-container-chat-space-message">
                      {message.text}
                    </div>
                  </div>
                )
              })
              }

                </div>
                <div className="chat-box-chat-container-type-space">
                  <div className="chat-box-chat-container-type-space-wrapper">
                    <div className="chat-box-chat-container-type-space-text-area-wrapper">
                      <textarea
                        value={this.state.text}
                        placeholder="Type a message..."
                        rows="1"
                        onChange={(e) => this.handleTextChange(e)}
                        onKeyPress={(e) => this.handleSendMessage(e)}
                        className="chat-box-chat-container-type-space-text-area">
                      </textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

ChatPageContainer.propTypes = {
};

function mapStateToProps(state) {
  return {
    socket: state.socketReducer.socket,
    user: state.userReducer.user,
    onlineUsers: state.chatReducer.onlineUsers,
    messages: state.chatReducer.messages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewMessageAction: (newMessage) => {
      dispatch(addNewMessage(newMessage))
    },
    setAllOnlineUsersAction: (chat) => {
      dispatch(setAllOnlineUsers(chat))
    },
    addNewOnlineUserAction: (newOnlineUser) => {
      dispatch(addNewOnlineUser(newOnlineUser))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPageContainer);
