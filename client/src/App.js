import React from 'react';
import 'antd/dist/antd.css'


import NoteForm from './components/NoteForm.js'
import RegistrationForm from './components/RegistrationForm'
import UserCredentialsForm from './components/UserCredentialsForm'

const userName = (name) => {
  return (
    <h1>{name.username}</h1>
  )
}

const noteTextAndTitle = (nText) => {
  return (
    <div>

      <h2>{nText.title}</h2>
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

        <h1>Add note</h1>
        {fullJournal(this.state.journal)}

        <h1>Note Form Test</h1>
        <NoteForm
          addNewNote={this.addNote} />

        <h1>Registration Form Test</h1>
        <RegistrationForm
          createNewRegistrationInfo={this.addUserRegistration} />

        <h1>User Credentials Form Test</h1>
        <UserCredentialsForm
          createNewUser={this.addUser} />

      </div>
    );
  }
}
export default App;
