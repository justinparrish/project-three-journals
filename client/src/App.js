//File Imports
import React from 'react';
import 'antd/dist/antd.css'
import { Typography } from 'antd';
import {BrowserRouter as Router} from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css'

//Component Imports
import NoteForm from './components/NoteForm.js'
import RegistrationForm from './components/RegistrationForm'
import UserCredentialsForm from './components/UserCredentialsForm'
import Journal from './components/Journal'

//Layout
const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;
const { SubMenu } = Menu;
/*
class Sider extends React.Component {
  state = {
    collapsed : false
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render () {
    return (
      
    )
  }
}
*/
//Code

class App extends React.Component {
  
  render() {
    return (
      <div className="">

      <Journal />

      </div>
    );
  }
}
export default App;
