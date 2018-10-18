import React, { Component } from 'react'

class UsersList extends React.Component {

  state = {
    users: [{id: 1, username: 'hermoinee'}, {id: 2, username: 'harry'}, {id: 3, username: 'ron'}]
  }

  // should handle click on any username, and render the ChatScreen accordingly

  // for current_user, add the class .active to the li, probably in some lifecycle method

  render() {
    const selectedUser = this.props.selectedUser
    const current_user = this.props.currentUser

    return (
      <div className='users_list'>
        <h3>Users</h3>
        <ul className='list-group'>
        {this.state.users.map((user, index) =>
          {
            if(user.id == current_user.id)
            {
              return
            }
            let class_name = 'list-group-item'
            if(user.id == selectedUser.id)
            {
              class_name += ' active'
            }
            return (
             <li key={user.id} className={class_name}>{user.username}</li>
            )
          }
        )}
        </ul>
      </div>

    )
  }
}

export default UsersList;