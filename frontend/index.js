import React from 'react';
import { render } from 'react-dom';
import { configureStore, history } from './store/configureStore';
import Root from './containers/Root';

import './assets/stylesheets/MainPageContainer.scss';
import './assets/stylesheets/Login.scss';
import './assets/stylesheets/Signup.scss';
import './assets/stylesheets/ChatContainer.scss';
import './assets/stylesheets/Banner.scss';





const store = configureStore();

render(
    <Root store={store} history={history} />,
    document.getElementById('root')
);
