import React from 'react';
import PropTypes from 'prop-types';
import Login from '../components/Login';

const MainPageContainer = ( {} ) => {
    return (
        <div className="main-container-bg-pic">
          <div className="main-container-wrapper">
            <Login />
          </div>
        </div>
    );
};

MainPageContainer.propTypes = {
};


export default MainPageContainer;
