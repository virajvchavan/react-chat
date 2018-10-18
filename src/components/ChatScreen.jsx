import React from 'react'

class ChatScreen extends React.Component {

  state = {
    // load these messages from api call when the component is loaded
    messages: []
  }

  // do some kind of polling to make it seem real time

  componentDidMount() {
    fetch("http://chat-app-rails-api.herokuapp.com/api/users/" + this.props.currentUser.id + "/messages")
      .then(res => res.json())
      .then(
        (result) =>
        {
          this.setState({
            messages: result
          })
        }
        )
  }
 
  render() {
    // const selectedUser = this.props.selectedUser
    const current_user = this.props.currentUser

    return (
      <div className='chat_messages'>
        <h4>Chat with {this.props.selectedUser.username}</h4>
        <ul className='list-group'>
          {this.state.messages.map((message, index) =>
            {
              let class_name = 'list-group-item'
              if(message.from_id === current_user.id)
              {
                class_name += ' sent_message'
              }
              else
              {
                class_name += ' received_message'
              }

              return (
                <li key={message.id} className={class_name}>{message.content}</li>
              )
            }
          )}
        </ul>
      </div>
    )
  }
}

export default ChatScreen;