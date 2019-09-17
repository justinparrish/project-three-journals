//File Imports
import React from 'react';
import 'antd/dist/antd.css'
import { Typography } from 'antd';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css'

//Component Imports
import NoteForm from './components/NoteForm.js'
import RegistrationForm from './components/RegistrationForm'
import UserCredentialsForm from './components/UserCredentialsForm'

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
const userName = (name) => {
  return (
    <Title level={4}>{name.username}</Title>
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

class App extends React.Component {
  state = {
    journal: [{
      user: [
        { username: "justin", pin: 8989 }
      ],
      regitser: [{
        name: "Justin Parrish", age: 19,
        state: "GA", email: "justin@gmail.com"
      }],
      Note: [
        { title: "my login", note: "username is justin and pin is 0000" }
      ]
    }]
  }

  addNote = (newNote) => {
    let journals = { ...this.state.journal[0] }

    journals.Note.push(newNote)

    this.setState({ journals })
  }

  addUserRegistration = (newUser) => {
    let journals = { ...this.state.journal[0] }

    journals.regitser.push(newUser)

    this.setState({ journals })
  }

  addUser = (newUser) => {
    let journals = { ...this.state.journal[0] }

    journals.user.push(newUser)

    this.setState({ journals })
  }


  render() {
    console.log(this.state.journal)
    return (
      <div className="">

        <Title level={3}>Add note</Title>
        {fullJournal(this.state.journal)}

        <Title>Note Form Test</Title>
        <NoteForm
          addNewNote={this.addNote} />

        <Title>Registration Form Test</Title>
        <RegistrationForm
          createNewRegistrationInfo={this.addUserRegistration} />

        <Title>User Credentials Form Test</Title>
        <UserCredentialsForm
          createNewUser={this.addUser} />

      </div>
    );
  }
}
export default App;
