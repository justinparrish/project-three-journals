import React, { Component } from 'react'

export default class NoteForm extends Component {

    state = {
        Note: {title: "", note: ""}
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
                    <input type="text" name="title" 
                        placeholder="Title of note"
                        onChange={this.handleInputValues}/>
                    <input type="text" name="note" 
                        placeholder="What's on your mind?"
                        onChange={this.handleInputValues}/>
                    <input type="submit" value="Add Note" />
                </form>
            </div>
        )
    }
}