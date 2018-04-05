import React from 'react';
import PropTypes from 'prop-types';


const ChatContainer = ( {} ) => {
    return (
        <div className="chat-container-header">
          <div className="chat-container-header-wrapper">
            <div className="chat-container-header-groupper">
              <img
                className="chat-contaner-header-icon"
                src="http://res.cloudinary.com/dclmhv0zu/image/upload/v1522940832/noun_115068_cc.png"/>
              <div className="chat-container-line">
              </div>
              <div className="chat-container-title">
                chatbox
              </div>
            </div>
            <div className="chat-container-spacer">
            </div>
          </div>
        </div>
    );
};

ChatContainer.propTypes = {
};


export default ChatContainer;
