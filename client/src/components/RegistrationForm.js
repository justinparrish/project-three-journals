import React, { Component } from 'react'

export default class RegistrationForm extends Component {

    state = {
        register: {
            name: String, age: Number,
            state: String, email: String,
            username: String, pin: Number
          }
    }

    handleInputValues = (evnt) => {
        let register = {...this.state.register}

        register[evnt.target.name] = evnt.target.value
        
        this.setState({ register })
    }
    
    handleSubmit = (evnt) => {
        evnt.preventDefault()

        this.props.createNewUser(this.state.register)
    }

    render() {
        return (
            <div className="registration">
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" onChange={this.handleInputValues}/>
                    <label>Age</label>
                    <input type="number" name="age" onChange={this.handleInputValues}/>
                    <label>State</label>
                    <input type="text" name="state" onChange={this.handleInputValues}/>
                    <label>Email</label>
                    <input type="email" name="email" onChange={this.handleInputValues}/>
                    <label>Username</label>
                    <input type="text" name="username" onChange={this.handleInputValues}/>
                    <label>Pin</label>
                    <input type="number" name="pin" onChange={this.handleInputValues}/>
                    <input type="submit" value="Create Account" />
                </form>
            </div>
        )
    }
}