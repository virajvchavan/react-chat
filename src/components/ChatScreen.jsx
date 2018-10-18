import React from 'react'

class ChatScreen extends React.Component {

  state = {
    // load these messages from api call when the component is loaded
    messages: [
      { id: 1, content: "I want to break free!", from_id: 2, to_id: 3 },
      { id: 2, content: "Bohemian Rhapsomy", from_id: 2, to_id: 3 },
      { id: 3, content: "We will, we will rock you!", from_id: 3, to_id: 2 },
    ]
  }

  // do some kind of polling to make it seem real time

  // this.props.currentUser gives us the logged in user
  // this.state.selectedUser gives us the user to chat with
 
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