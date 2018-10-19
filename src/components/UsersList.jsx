import React from 'react'

class UsersList extends React.Component {

  state = {
    users: []
  }

  // should handle click on any username, and render the ChatScreen accordingly

  componentDidMount() {
    fetch("http://chat-app-rails-api.herokuapp.com/api/users")
      .then(res => res.json())
      .then(
        (result) =>
        {
          console.log(result)
          this.setState({
            users: result
          })
        }
        )
  }

  render() {
    const selectedUser = this.props.selectedUser
    const current_user = this.props.currentUser

    return (
      <div className='users_list'>
        <h3>Users</h3>
        <ul className='list-group'>
        {this.state.users.map((user, index) =>
          {
            if(user.id === current_user.id)
            {
              return undefined
            }
            let class_name = 'list-group-item user'
            if(user.id === selectedUser.id)
            {
              class_name += ' active'
            }
            return (
             <li key={user.id} id={user.id} value={user.username} className={class_name} onClick={this.props.handleClick}>{user.username}</li>
            )
          }
        )}
        </ul>
      </div>

    )
  }
}

export default UsersList;