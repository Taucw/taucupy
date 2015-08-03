import React from 'react';
import Router from 'react-router';
import RouterContainer from './services/RouterContainer';
import routes from './config/routes';
import LoginActions from './actions/LoginActions';

require("bootstrap-webpack");
require('./App.css');

var router = Router.create({routes});
RouterContainer.set(router);

let jwt = localStorage.getItem('jwt');
if(jwt) {
  LoginActions.loginUser(jwt);
}

router.run( function(Handler) {
  React.render(<Handler />, document.getElementById('app'));
});
