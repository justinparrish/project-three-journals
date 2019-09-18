//File Imports
import React from 'react';
import 'antd/dist/antd.css'
import { Typography } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css'

//Component Imports
import NoteForm from './components/NoteForm.js'
import RegistrationForm from './components/RegistrationForm'
import UserCredentialsForm from './components/UserCredentialsForm'
import Journal from './components/Journal'
import HomePage from './components/HomePage'

//Layout
const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;
const { SubMenu } = Menu;

//Code

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/registration/2" component={UserCredentialsForm} />
          <Route exact path="/registration/1" component={RegistrationForm} />
          <Route exact path="/journal" component={Journal} />
          <Route exact path="/note" component={NoteForm} />
        </Switch>
      </Router>
    );
  }
}
export default App;
