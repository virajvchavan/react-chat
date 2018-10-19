import React from 'react'
import ChatForm from './ChatForm.jsx'

class ChatScreen extends React.Component {

  state = {
    // load these messages from api call when the component is loaded
    messages: []
  }

  // do some kind of polling to make it seem real time

  componentDidMount() {
    this.loadMessages();
    this.timer = setInterval(()=> this.loadMessages(), 3000);
  }

  componentWillUnmount() {
    this.timer = null; // here...
  }

  componentDidUpdate(prevProps) {
    if(prevProps.selectedUser.id !== this.props.selectedUser.id)
    {
      this.loadMessages();
    }
  }

  loadMessages() {
    fetch("http://chat-app-rails-api.herokuapp.com/api/users/" + this.props.currentUser.id + "/messages?other_user_id=" + this.props.selectedUser.id)
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

  send_message = (event) => {
    const url = 'http://chat-app-rails-api.herokuapp.com/api/users/' + this.props.currentUser.id + '/send_message'
    var request = new Request(url, {
      method: 'POST',
      body: 'content=' + document.getElementById('message_content').value + '&receiver_id=' + this.props.selectedUser.id,
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
    });

    fetch(request)
      .then(res => res.json())
      .then(
        (result) =>
        {
          console.log('message_sent');
          document.getElementById('message_content').value = '';
          this.loadMessages();
        }
      )
  }
 
  render() {
    const selected_user = this.props.selectedUser
    const current_user = this.props.currentUser

    if(selected_user.id)
    {
      return (
        <div className='chat_messages'>
          <h4>Chat with {selected_user.username}</h4>
          <hr />
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
          <ChatForm send_message={this.send_message} />
        </div>
      )
    }
    else
    {
      return (
        <div className='chat_messages'>
          <h4>Select a user</h4>
        </div>
      )
    }
  }
}

export default ChatScreen;