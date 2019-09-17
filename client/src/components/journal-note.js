import React, { Component } from 'react';

const noteTitle = (nTitle) => { 
    return(
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

  export default JournalNote