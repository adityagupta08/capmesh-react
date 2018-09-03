import React, { Component } from 'react';
import './App.css';
import forgotPassword from './components/forgotPassword';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import loginPage from './components/loginPage';
import changePassword from './components/changePassword'
import Mail from './components/mail'
import Signup from './components/signup';
import LinkVerification from './components/linkVerification';
import passwordUpdate from './components/passwordUpdate';
import NotVerified from './components/notVerified';
import Home from './components/home';
import Organization from './components/organization';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
    if(sessionStorage.userName)
      this.state = {
        isLoggedIn:true,
        userName:sessionStorage.userName
      }
  }
  render() {
    return (
      <div>
      <Router>
        <Switch>
          <Route exact path='/' component={loginPage} />
          <Route exact path='/forgotPassword/:userType' component={forgotPassword} />
          <Route exact path='/changePassword/:userType/:name' component={changePassword} />
          <Route exact path='/mail/:userType/:id/:name' component={Mail} />
          <Route exact path='/login' component={loginPage} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/passwordUpdate' component={passwordUpdate} />
          <Route exact path='/notVerified/:userType/:username' component={NotVerified} />
    <Route exact path='/home' render = {()=><Home user={this.state.userName} />} />
           <Route exact path='/Organization' component={Organization} />

          <Route exact path='/LinkVerification/:whichone/:id/:verificationCode' component={LinkVerification} />
        </Switch>
      </Router>
    </div>
    );
  }
}

export default App;
