import React from 'react';
import AuthenticatedComponent from './AuthenticatedComponent';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h2>Hi {this.props.user.username},</h2>
      </div>
    );
  }
}

export default AuthenticatedComponent(Dashboard);
