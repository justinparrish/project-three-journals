import React from 'react';
import 'antd/dist/antd.css'
import { Typography } from 'antd';
// import { Link } from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom'
// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Button} from 'antd';
import '../App.css'



const { Title } = Typography;

export default class HomePage extends React.Component {


    render() {
        return (
            <div className="home-page">
                <Title>Welcome to your Online Journal</Title>
                <Button href="/journal" type="primary">
                    Get Started Now
                </Button>
            </div>
        )
    }
}