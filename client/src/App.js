import React from 'react';
import 'antd/dist/antd.css'

import NoteForm from './components/NoteForm.js'

const noteTitle = (nTitle) => {
  return (
    <h2>{nTitle.title}</h2>
  )
}

const noteText = (nText) => {
  return (
    <p>{nText.note}</p>
  )
}

const fullNote = (note) => {
  return (
    <div>
      {note.Note.map(noteTitle)}
      {note.Note.map(noteText)}
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
    journal : [{
      user: { username: "justin", pin: 8989 },
      regitser: {
        name: "Justin Parrish", age: 19,
        state: "GA", email: "justin@gmail.com",
        username: "justin", pin: 8989
      },
      Note: [
        { title: "my login", note: "username is justin and pin is 0000" }
      ]
    }]
  }
  render() {
    return (
      <div>
        <h1>Add note</h1>
        {fullJournal(this.state.journal)}
        <NoteForm />

      </div>
    );
  }
}
export default App;
