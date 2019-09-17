import React, { Component } from 'react'
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css'
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';

const { Title } = Typography;


export default class RegistrationForm extends Component {

    state = {
        register: {
            name: String, age: Number,
            state: String, email: String
        }
    }

    handleInputValues = (evnt) => {
        let register = { ...this.state.register }

        register[evnt.target.name] = evnt.target.value

        this.setState({ register })
    }

    handleSubmit = (evnt) => {
        evnt.preventDefault()

        this.props.createNewRegistrationInfo(this.state.register)
    }

    render() {
        return (
            <div className="registration">
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <Form.Item label="Name">
                        <Input type="text" name="name" onChange={this.handleInputValues} />
                    </Form.Item>
                    <Form.Item label="Age">
                        <Input type="number" name="age" onChange={this.handleInputValues} />
                    </Form.Item>
                    <Form.Item label="State">
                        <Input type="text" name="state" onChange={this.handleInputValues} />
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input type="email" name="email" onChange={this.handleInputValues} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" href="/registration/2">
                            Next: Create Credentials
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}