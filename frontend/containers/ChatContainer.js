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
                <div className="chat-box-people-list-people">
                  <img className="chat-box-people-list-profile-pic"
                    src="http://res.cloudinary.com/dclmhv0zu/image/upload/v1523040961/555cd827049321.5635f4f5b110f.png"/>
                  <div className="chat-box-people-list-name">
                    Vincent Liu
                  </div>
                </div>
              </div>
              <div className="chat-box-chat-container">
                <div className="chat-box-chat-container-chat-space">

                </div>
                <div className="chat-box-chat-container-type-space">
                  <div className="chat-box-chat-container-type-space-wrapper">
                    <div className="chat-box-chat-container-type-space-text-area-wrapper">
                      <textarea
                        placeholder="Type a message..."
                        rows="1"
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
};

ChatContainer.propTypes = {
};


export default ChatContainer;
