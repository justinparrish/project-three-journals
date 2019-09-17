import React, { Component } from 'react'

export default class UserCredentialsForm extends Component {
    state = {
        user: { username: String, pin: Number }
    }


    handleInputValues = (evnt) => {
        let user = { ...this.state.user }

        user[evnt.target.name] = evnt.target.value

        this.setState({ user })
    }

    handleSubmit = (evnt) => {
        evnt.preventDefault()

        this.props.createNewUser(this.state.user)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type="text" name="username" onChange={this.handleInputValues} />
                    <label>Pin</label>
                    <input type="number" name="pin" onChange={this.handleInputValues} />
                    <input type="submit" value="Finish" />
                </form>
            </div>
        )
    }
}