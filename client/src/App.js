//File Imports
import React from 'react';
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

//Component Imports
import NoteForm from './components/NoteForm.js'
import RegistrationForm from './components/RegistrationForm'
import UserCredentialsForm from './components/UserCredentialsForm'
import Journal from './components/Journal'
import HomePage from './components/HomePage'



class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/home" component={HomePage} /> */}
          <Route exact path="/registration/2" component={UserCredentialsForm} />
          <Route exact path="/registration/1" component={RegistrationForm} />
          {/* <Route exact path="/journal" component={Journal} /> */}
          <Route exact path="/note" component={NoteForm} />
          <HomePage />
        </Switch>
      </Router>
    );
  }
}
export default App;
