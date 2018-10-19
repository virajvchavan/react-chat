import React from 'react'
import UsersList from './UsersList.jsx'
import ChatScreen from './ChatScreen.jsx'
import LoginForm from './LoginForm.jsx'

class Dashboard extends React.Component {

  state = {
    isLoggedIn: false,
    currentUser: { id: 2, username: 'jon' },
    selectedUser: { id: null, username: null }
  }

  handleClick = (event) => {
    this.setState({
      selectedUser: {id: event.target.getAttribute('id'), username: event.target.getAttribute('value')}
    });
    // add active class to proper li in UsersList
    let users = document.querySelectorAll(".user");
    for(var i=0; i < users.length; i++){
      users[i].classList.remove('active');
    }
    document.getElementById(event.target.getAttribute('id')).classList.add('active');
  }

  login = (event) => {
    const url = 'http://chat-app-rails-api.herokuapp.com/api/users/'
    var request = new Request(url, {
      method: 'POST',
      body: 'username=' + document.getElementById('username_input').value,
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
    });

    fetch(request)
      .then(res => res.json())
      .then(
        (result) =>
        {
          if(result.id)
          {
            console.log('user logged in');
            this.setState({
              isLoggedIn: true,
              currentUser: { id: result.id, username:  document.getElementById('username_input').value }
            })
          }
          else
          {
            console.log('error loggin in')
          }
        }
      )
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
              <UsersList currentUser={this.state.currentUser} selectedUser={this.state.selectedUser} handleClick={this.handleClick} />
            </div>
            <div className='col-md-9'>
              <ChatScreen currentUser={this.state.currentUser} selectedUser={this.state.selectedUser} />
            </div>
          </div>
        </div>
      );
    }
    return (
      <LoginForm login={this.login} />
    );
  }
}

export default Dashboard;