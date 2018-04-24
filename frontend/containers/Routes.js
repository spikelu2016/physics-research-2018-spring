import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginPageContainer from './LoginPageContainer'
import SignupPageContainer from './SignupPageContainer'
import ChatPageContainer from './ChatPageContainer'




export default class Routes extends Component {
   render() {
      return(
       <div>
         <Switch>
           <Route path="/chatbox" exact={ true } component={ ChatPageContainer }/>
           <Route path="/signup" exact={ true } component={ SignupPageContainer }/>
           <Route path="/" exact={ true } component={ LoginPageContainer }/>
         </Switch>
       </div>
     )
   }
}
