import React, { Component } from 'react'

export default class NoteForm extends Component {

    state = {
        title: String,
        note: String
    }

    render(){
        return (
            <div>
                <form>
                    <input type="text" name="title" />
                    <input type="text" name="note" />
                    <input type="submit" value="Add Note" />
                </form>
            </div>
        )
    }
}