import React from 'react';
import {Link} from 'react-router';

class NavigationAnon extends React.Component {

  render() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/login">Sign in</Link></li>
      </ul>
    );
  }
}

export default NavigationAnon;
