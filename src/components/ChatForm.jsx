import React from 'react'

class ChatForm extends React.Component {

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      document.getElementById('send_btn').click();
    }
  }

  render() {
    return (
      <div id='chat_form'>
        <div className='form-inline' >
          <input type='text' className='form-control col-md-11' id='message_content' onKeyPress={this.handleKeyPress} />
          <button className='btn btn-success' id='send_btn' onClick={this.props.send_message}>Send</button>
        </div>
      </div>
    )
  }
}

export default ChatForm;