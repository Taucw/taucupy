import React from 'react';
import {Link} from 'react-router';
import LoginStore from '../stores/LoginStore';
import auth from '../services/AuthService';
import RouterContainer from '../services/RouterContainer';
import NavigationAuthenticated from './NavigationAuthenticated'
import NavigationAnon from './NavigationAnon'

class Navigation extends React.Component {

  constructor() {
    super();
    this._onChange();
  }

  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
    LoginStore.addChangeListener(this.changeListener);
  }

  _onChange() {
    this.setState(this._getLoginState());
  }

  componentWillUnmount() {
    LoginStore.removeChangeListener(this.changeListener);
  }

  handleLogout(e) {
    auth.logout();
  }

  _onChange() {
    this.state = {
      userLoggedIn: LoginStore.isLoggedIn(),
      user: LoginStore.user
    };
  }
  render() {
    return(
      <nav className="navbar navbar-default container">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">App</a>
        </div>
        {this.navItems}
      </nav>
    );
  }
  get navItems() {
    if(this.state.userLoggedIn) {
      return (
        <NavigationAuthenticated user={this.state.user} logout={this.handleLogout.bind(this)} />
      );
    } else {
      return (
        <NavigationAnon />
      );
    }
  }
}

export default Navigation
