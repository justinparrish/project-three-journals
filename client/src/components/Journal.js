import React from 'react';
import 'antd/dist/antd.css'
import { Typography, Avatar } from 'antd';
// import { Link } from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Modal, Button } from 'antd';



import NoteForm from './NoteForm.js'
import EditRegistrationInfo from './EditRegistrationInfo.js'
// import RegistrationForm from './RegistrationForm'
// import UserCredentialsForm from './UserCredentialsForm'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

const userName = (name) => {
  return (
    <Title level={4}>{name.username}</Title>
  )
}

const noteTitle = (nTitle) => {
  return (
    <div className="noteTitles">
      <Menu.Item key="3">{nTitle.title}</Menu.Item>
    </div>
  )
}


const noteTextAndTitle = (nText) => {
  return (
    <div className="note">

      <Title level={4}>{nText.title}<Icon type="delete" /></Title>
      <p>{nText.note}</p>
    </div>
  )
}

const fullNote = (note) => {
  return (
    <div>
      {/* {note.user.map(userName)} */}
      {note.Note.map(noteTextAndTitle)}
    </div>
  )

}

const fullJournal = (full) => {
  return (
    <div>
      {full.map(fullNote)}
    </div>
  )

}
const jornalContainer = (journals) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={this.state.collasped} onCollapse={this.onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">


        </Menu>
      </Sider>
    </Layout>
  )
}

export default class Journal extends React.Component {
  state = {
    journal: [{
      user: [
        { username: "justin", pin: 8989 }
      ],
      register: [{
        name: "Justin Parrish", age: 19,
        state: "GA", email: "justin@gmail.com"
      }],
      Note: [
        { title: "my login", note: "username is justin and pin is 0000" }
      ]
    }],
    collapsed: false,
    visible: false
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  addNote = (newNote) => {
    let journals = { ...this.state.journal[0] }

    journals.Note.push(newNote)

    this.setState({ journals })
  }

  addUserRegistration = (newUser) => {
    let journals = { ...this.state.journal[0] }

    journals.register.push(newUser)

    this.setState({ journals })
  }

  addUser = (newUser) => {
    let journals = { ...this.state.journal[0] }

    journals.user.push(newUser)

    this.setState({ journals })
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() {
    console.log(this.state.journal)
    return (
      <div className="">
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{ borderRight: '#fff' }}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

              {/* First section of Side Bar */}
              <Menu.Item key="8">
                <Avatar shape="circle" size="small" icon="user" />
              </Menu.Item>

              {/* User Drop Down of Side Bar */}
              <Menu.Item key="2">
                <Icon type="plus" />
                <span >Create New Note</span>
              </Menu.Item>


              <SubMenu key="sub2" title=
                {<span><Icon type="paper-clip" /><span>Notes</span></span>} >
                <Menu.Item key="3"><Icon type="edit" />Bills to be Paid</Menu.Item>
                <Menu.Item key="4"><Icon type="edit" />Red Velvet</Menu.Item>

              </SubMenu>

              {/* Notes Drop Down of Side Bar */}

              <SubMenu key="sub3" title=
                {<span><Icon type="user" />
                  <span>Trash</span>
                </span>} >
                <Menu.Item key="5"><Icon type="delete" />Paid Bills</Menu.Item>
                <Menu.Item key="6"><Icon type="delete" />Thursday's Shopping List</Menu.Item>
              </SubMenu>
              <Menu.Item key="7" onClick={this.showModal}>
                <Icon type="setting" />
                <span >Account Setting</span>
                <Modal
                  title="Basic Modal"
                  visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
                >
                  <EditRegistrationInfo
                    createNewRegistrationInfo={this.addUserRegistration}
                  />
                </Modal>
              </Menu.Item>

            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: 'dark', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>

              <NoteForm
                addNewNote={this.addNote} />

              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Justin</Breadcrumb.Item>
                <Breadcrumb.Item>Notes</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                
                {fullJournal(this.state.journal)}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>GA ©2019 Created by Justin Parrish</Footer>
          </Layout>

        </Layout>
      </div>
    );
  }
}
