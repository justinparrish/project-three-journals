import React, { Component } from 'react'
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


export default class NoteForm extends Component {

    state = {
        Note: { title: String, note: String }
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
                        <Input type="submit" value="Add Note" />
                    </Form.Item>
                </Form>
            </div>
        )
    }
}