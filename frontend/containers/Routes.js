import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginPageContainer from './LoginPageContainer'
import SignupPageContainer from './SignupPageContainer'



export default class Routes extends Component {
   render() {
      return(
       <div>
         <Switch>
           <Route path="/" exact={ true } component={ SignupPageContainer }/>
         </Switch>
       </div>
     )
   }
}
