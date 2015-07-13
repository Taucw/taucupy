import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import { Router, Route, DefaultRoute } from 'react-router';

export default (
  <Route name="app" path="/" handler={Main}>
    <DefaultRoute handler={Home} />
    <Route path="login" handler={Login} />
    <Route path="dashboard" handler={Dashboard} />
  </Route>
)
