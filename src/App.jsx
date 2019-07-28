import React from "react";
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';

import HomePage from './components/HomePage/layout/HomePage';
import DashboardPage from './components/DashboardPage/layout/DashboardPage';
import { history } from './helpers/history';
import "./App.css";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/dashboard' component={DashboardPage} />
      </Switch>
    </Router>
  );
};

export default App;
