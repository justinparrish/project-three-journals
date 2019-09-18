import React, { Component } from 'react'
import { Typography } from 'antd';
// import { Link } from 'react-router-dom';
import 'antd/dist/antd.css'
import {
    Form,
    Input,
    // Tooltip,
    // Icon,
    // Cascader,
    // Select,
    // Row,
    // Col,
    // Checkbox,
    Button,
    // AutoComplete,
} from 'antd';

const { Title } = Typography;


export default class UserCredentialsForm extends Component {
    state = {
        user: { username: "", pin: "" }
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
                <Title level={1}>Set a Username and Pin</Title>
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <Form.Item label="Username">
                        <Input type="text" name="username" onChange={this.handleInputValues} />
                    </Form.Item>
                    <Form.Item label="Pin">
                        <Input type="number" name="pin" onChange={this.handleInputValues} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" href="/journal">
                            Complete
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}