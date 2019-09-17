import React from 'react';
import 'antd/dist/antd.css'
import { Typography } from 'antd';
import {BrowserRouter as Router} from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';



import NoteForm from './NoteForm.js'
import RegistrationForm from './RegistrationForm'
import UserCredentialsForm from './UserCredentialsForm'

const { Title } = Typography;

export default class HomePage extends Component {


    render() {
        return (
            <div>
                <Title>Welcome to your Online Journal</Title>
            </div>
        )
    }
}