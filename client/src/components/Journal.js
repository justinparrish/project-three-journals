import React from 'react';
import 'antd/dist/antd.css'
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';



import NoteForm from './NoteForm.js'
import RegistrationForm from './RegistrationForm'
import UserCredentialsForm from './UserCredentialsForm'

const { Title } = Typography;

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

export default class App extends React.Component {
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
  