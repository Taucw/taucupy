import React from 'react';
import auth from '../services/AuthService';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    var login = this.refs.login.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;
    try {
      auth.login(login, password);
    } catch(err) {
      alert("There is an error logging in");
      console.log('Error logging in', err);
    }
    this.refs.login.getDOMNode().value = '';
    this.refs.password.getDOMNode().value = '';
  }
  render() {
    return (
      <div className="form-vertical">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
              <input ref="login" type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <input ref="password" type="password" className="form-control"/>
            </div>
            <button type="submit">Sign In</button>
        </form>
      </div>
    )
  }
}

export default Login;
