import React from 'react';
import 'antd/dist/antd.css'
import { Typography } from 'antd';
// import { Link } from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';




import NoteForm from './NoteForm.js'
// import RegistrationForm from './RegistrationForm'
// import UserCredentialsForm from './UserCredentialsForm'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

const userName = (name) => {
  return (
    <Title level={4}>{name.username}</Title>
  )
}

const noteTitle = (nTitle) => {
  return (
    <div className="noteTitles">
      <Menu.Item key="3">{nTitle.title}</Menu.Item>
    </div>
  )
}

const notesContainer = (list) => {
  return (
    <SubMenu key="sub2" title=
      {<span><Icon type="note" /><span>Notes</span></span>} >
      {list.title.map(noteTitle)}
    </SubMenu>
  )
}

const noteTextAndTitle = (nText) => {
  return (
    <div className="note">

      <Title level={4}>{nText.title}</Title>
      <p>{nText.note}</p>
    </div>
  )
}

const fullNote = (note) => {
  return (
    <div>
      {note.user.map(userName)}
      {note.Note.map(noteTextAndTitle)}
    </div>
  )

}

const fullJournal = (full) => {
  return (
    <div>
      {full.map(fullNote)}
    </div>
  )

}
const jornalContainer = (journals) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={this.state.collasped} onCollapse={this.onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">


        </Menu>
      </Sider>
    </Layout>
      )
    }
    
export default class Journal extends React.Component {
        state = {
          journal: [{
            user: [
              { username: "justin", pin: 8989 }
            ],
            register: [{
              name: "Justin Parrish", age: 19,
              state: "GA", email: "justin@gmail.com"
            }],
            Note: [
              { title: "my login", note: "username is justin and pin is 0000" }
            ]
          }],
          collasped: false
        }

  onCollapse = collapsed => {
        console.log(collapsed);
      this.setState({collapsed});
    };
  
  addNote = (newNote) => {
        let journals = {...this.state.journal[0]}

      journals.Note.push(newNote)
  
    this.setState({journals})
    }
  
  addUserRegistration = (newUser) => {
        let journals = {...this.state.journal[0]}

      journals.regitser.push(newUser)
  
    this.setState({journals})
    }
  
  addUser = (newUser) => {
        let journals = {...this.state.journal[0]}

      journals.user.push(newUser)
  
    this.setState({journals})
    }
  
  
  render() {
        console.log(this.state.journal)
    return (
      <div className="">
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collasped} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              {/* First section of Side Bar */}
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>User</span>
              </Menu.Item>
              {/* User Drop Down of Side Bar */}
              <SubMenu key="sub1" title=
                {<span><Icon type="user" /><span>User</span></span>} >
                <Menu.Item key="3">Justin</Menu.Item>
              </SubMenu>
              {/* Notes Drop Down of Side Bar */}
              {notesContainer}
              <SubMenu key="sub3" title=
                {<span><Icon type="user" />
                  <span>Trash</span>
                </span>} >
                <Menu.Item key="3">asdsd</Menu.Item>
                <Menu.Item key="4">asdsd</Menu.Item>
                <Menu.Item key="5">asdsd</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Title level={3}>Add note</Title>
          {fullJournal(this.state.journal)}

          <Title>Note Form Test</Title>
          <NoteForm
            addNewNote={this.addNote} />

        </Layout>
      </div>
      );
    }
  }
