import React, { Component } from 'react'

export default class RegistrationForm extends Component {

    state = {
        regitser: {
            name: "", age: 0,
            state: "", email: "",
            username: "", pin: 0000
          }
    }

    render() {
        return (
            <div className="registration">
                <form>
                    <input type="text" name="name" />
                    <input type="number" name="age" />
                    <input type="text" name="state" />
                    <input type="email" name="email" />
                    <input type="text" name="username" />
                    <input type="number" name="pin" />
                    <input type="submit" value="Create Account" />
                </form>
            </div>
        )
    }
}