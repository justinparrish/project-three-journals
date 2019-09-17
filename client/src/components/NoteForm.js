import React, { Component } from 'react'

export default class NoteForm extends Component {

    state = {
        Note: {title: String, note: String}
    }

    handleInputValues = (evnt) => {
        let Note = {...this.state.Note}
        
        Note[evnt.target.name] = evnt.target.value

        this.setState({ Note })
    }
    handleSubmit = (evnt) => {
        evnt.preventDefault()
        console.log(this.state)
        this.props.addNewNote(this.state.Note)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:</label>
                    <input type="text" name="title" 
                        placeholder="Title of note"
                        onChange={this.handleInputValues}/>
                    <label>Note:</label>
                    <input type="text" name="note" 
                        placeholder="What's on your mind?"
                        onChange={this.handleInputValues}/>
                    <input type="submit" value="Add Note" />
                </form>
            </div>
        )
    }
}