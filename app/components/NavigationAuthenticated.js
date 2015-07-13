import React from 'react';
import {Link} from 'react-router';

class NavigationAuthenticated extends React.Component {
  username() {
    return this.props.user['username'];
  }
  handleLogout(e) {
    this.props.logout(e);
  }
  render() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/dashboard">{this.username()}</Link></li>
        <li><a onClick={this.handleLogout.bind(this)}>Sign out</a></li>
      </ul>
    );
  }
}

export default NavigationAuthenticated;
