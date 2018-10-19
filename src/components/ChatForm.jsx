import React from 'react'

class ChatForm extends React.Component {
  render() {
    return (
      <div id='chat_form'>
        <div className='form-inline' >
          <input type='text' className='form-control col-md-11' id='message_content' />
          <button className='btn btn-success' onClick={this.props.send_message}>Send</button>
        </div>
      </div>
    )
  }
}

export default ChatForm;