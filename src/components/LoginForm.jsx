import React from 'react'

class LoginForm extends React.Component {
  render() {
    return (
      <div id='login_form' className='form-inline'>
        <div className='container'>
          <div className='jumbotron'>
            <h3>Enter your username:</h3>
            <input type='text' className='form-control col-md-11' id='username_input' />
            <button className='btn btn-success' onClick={this.props.login}>Start Chatting</button>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;