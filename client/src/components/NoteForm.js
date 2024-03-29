import React, { Component } from 'react'
import { Typography } from 'antd'
import 'antd/dist/antd.css'
import {
    Form,
    Input,
    Button,
} from 'antd';

const { Title } = Typography;


export default class NoteForm extends Component {

    state = {
        Note: { title: "", note: "" }
    }

    handleInputValues = (evnt) => {
        let Note = { ...this.state.Note }

        Note[evnt.target.name] = evnt.target.value

        this.setState({ Note })
    }
    handleSubmit = (evnt) => {
        evnt.preventDefault()
        console.log(this.state)
        this.props.addNewNote(this.state.Note)
    }


    render() {
        return (
            <div>
                <Title level={1}>Add Your Note</Title>
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <Form.Item label="Title:">
                        <Input type="text" name="title"
                            placeholder="Title of note"
                            onChange={this.handleInputValues} />
                    </Form.Item>
                    <Form.Item label="Note:">
                        <Input type="text" name="note"
                            placeholder="What's on your mind?"
                            onChange={this.handleInputValues} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Add Note
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}