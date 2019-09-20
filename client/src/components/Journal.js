import React from 'react';
import 'antd/dist/antd.css'
import { Typography, Avatar } from 'antd';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Modal, Button } from 'antd';
import NoteForm from './NoteForm.js'
import RegistrationInfo from './RegistrationForm'
import UserCredential from './UserCredentialsForm'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

//----------------Note and Text -----------------------
const noteTextAndTitle = (nText) => {
  return (
    <div className="note">

      <Title level={4}>{nText.title}
        <span className="delete">
          <Icon type="delete" />
        </span>
      </Title>
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
//------------------------Name-------------------
const usersName = (uName) => {
  return (
    <span className="name">
      {uName.name}
    </span>
  )
}
const fullName = (name) => {
  return (
    <span>
      {name.register.map(usersName)}
    </span>
  )
}

const wholeName = (full) => {
  return (
    <span>
      {full.map(fullName)}
    </span>
  )
}
//----------------Registration Info-----------

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
    visible: false,
    loading: false,
    newNote: true,
    adminMode: true
  }
  //------------------------Fetching Data for user------------------------
  componentDidMount = () => {
    this.getNoteFromServer()
  }


  getNoteFromServer = () => {
    fetch('/note')
    .then(res => res.json())
    .then(listOfNotes => {
      this.setNoteList(listOfNotes)
    })
    console.log(fetch('/note').then(res => res.json()))
  }

  setNoteList = (list) => {
    let journals = {...this.state.journal}

    journals[0].Note[0].title = list[0].title
    journals[0].Note[0].note = list[0].note

    this.setState({ journals })
  }

  sendNewNoteToServer = (newNote) => {
    fetch('/note/add', 
    {
      method: 'POST',
      body: JSON.stringify(newNote),
      headers: { 'Content-Type' : 'applications/json'}
    })
  }
  //------------------Toggling view of component------------------
  toggleCreateNote = () => {
    const newNote = !this.state.newNote
    this.setState({ newNote })
  };

  toggleAdminMode = () => {
    const adminMode = !this.state.adminMode
    this.setState({ adminMode })
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  //--------------------Add Form Item------------------------
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
  //------------------Handling Modal------------------------
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  //------------------Layout of Journal------------------------------
  render() {
    const { visible, loading } = this.state;
    console.log(this.state.journal[0].register[0].name)
    return (
      <div className="journal-container">
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{ borderRight: '#fff' }}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

              {/* First section of Side Bar */}
              <Menu.Item key="8">
                <Avatar shape="circle" size="small" icon="user" />
                {wholeName(this.state.journal)}
              </Menu.Item>

              {/* User Drop Down of Side Bar */}
              <Menu.Item key="2" onClick={this.toggleCreateNote}>
                <Icon type="plus" />
                {this.state.newNote ? <span>Hide Form</span> : <span >Create New Note</span>}
              </Menu.Item>

              <Menu.Item onClick={this.toggleAdminMode}>
                {this.state.adminMode ? <span><Icon type="unlock" /> Admin</span> : <span><Icon type="lock" />User</span>}
              </Menu.Item>

              {this.state.adminMode ?
                <SubMenu title=
                  {<span><Icon type="eye" />
                    <span>View User Info</span></span>}>
                  <Menu.Item>Username: {this.state.journal[0].user[0].username}</Menu.Item>
                  <Menu.Item>Pin: {this.state.journal[0].user[0].pin}</Menu.Item>
                </SubMenu>
                : null}

              {this.state.adminMode ?
                <SubMenu title=
                  {<span><Icon type="eye" />
                    <span>View Account Info</span></span>}>
                  <Menu.Item>Name: {this.state.journal[0].register[0].name}</Menu.Item>
                  <Menu.Item>Age: {this.state.journal[0].register[0].age}</Menu.Item>
                  <Menu.Item>State: {this.state.journal[0].register[0].state}</Menu.Item>
                  <Menu.Item>Email: {this.state.journal[0].register[0].email}</Menu.Item>
                </SubMenu>
                : null}

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
                <Icon type="user-add" />
                <span >New Account</span>
                <Modal
                  visible={visible}
                  title="Title"
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  footer={[
                    <Button key="back" onClick={this.handleCancel}>
                      Return
            </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                      Submit
            </Button>,
                  ]}>
                  <RegistrationInfo
                    createNewRegistrationInfo={this.addUserRegistration}
                  />
                  <UserCredential
                    createNewUser={this.addUser}
                  />
                </Modal>
              </Menu.Item>

            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: 'dark', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>

              {this.state.newNote ? <NoteForm
                addNewNote={this.sendNewNoteToServer} /> : null}

              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>{this.state.journal[0].user[0].username}</Breadcrumb.Item>
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
