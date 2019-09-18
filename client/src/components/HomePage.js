import React from 'react';
import 'antd/dist/antd.css'
import { Typography } from 'antd';
// import { Link } from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom'
// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Button} from 'antd';


// import NoteForm from './NoteForm.js'
// import RegistrationForm from './RegistrationForm'
// import UserCredentialsForm from './UserCredentialsForm'

const { Title } = Typography;

export default class HomePage extends React.Component {
    state = {
        loading: false
    }

    toggleLoadingButton = () => {
        const loading = !this.state.loading

        this.setState({ loading })
    }

    render() {
        return (
            <div>
                <Title>Welcome to your Online Journal</Title>
                <Button href="/registration/1" type="primary" >
                    Get Started Now
                </Button>
            </div>
        )
    }
}