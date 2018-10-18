import React from 'react'
import UsersList from './UsersList.jsx'
import ChatScreen from './ChatScreen.jsx'

class Dashboard extends React.Component {

  state = {
    isLoggedIn: true,
    currentUser: { id: 2, username: 'harry' },
    selectedUser: { id: 3, username: 'ron' }
  }

  render() {
    if(this.state.isLoggedIn){
      return ( 
        <div className='container'>
          <div className='breadcrumb'>
            <h6 className='float-right'> Welcome, {this.state.currentUser.username}! <span className='badge badge-info'>Logout</span></h6>
          </div>
          <div className='row'>
            <div className='col-md-3'>
              <UsersList currentUser={this.state.currentUser} selectedUser={this.state.selectedUser} />
            </div>
            <div className='col-md-9'>
              <ChatScreen currentUser={this.state.currentUser} selectedUser={this.state.selectedUser} />
            </div>
          </div>
        </div>
      );
    }
    return (
      <h1>Login kar pahila.</h1>
    );
  }
}

export default Dashboard;