import React from 'react';
import { Route, RouteHandler, Link } from 'react-router';
import Navigation from './Navigation';

class Main extends React.Component {
  render() {
    return (
      <div role="main">
      <Navigation />
      <div role="content" className="container">
        <RouteHandler {...this.props} />
      </div>
      </div>
    );
  }
}

export default Main;
