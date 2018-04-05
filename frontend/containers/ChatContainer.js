import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../components/Banner';


const ChatContainer = ( {} ) => {
    return (
        <div>
          <Banner />
          <div className="chat-box-wrapper">
            <div className="chat-box-container">
              <div className="chat-box-people-list-container">
              </div>
              <div className="chat-box-chat-container">
              </div>
            </div>
          </div>
        </div>
    );
};

ChatContainer.propTypes = {
};


export default ChatContainer;
