import React from "react";
import { Route, Switch } from "react-router-dom";
import { Router } from "react-router";
import { Provider } from "react-redux";

import HomePage from "./components/HomePage/layout/HomePage";
import DashboardPage from "./components/DashboardPage/layout/DashboardPage";
import { history } from "./helpers/history";
import Header from "./components/HomePage/Header/index";
import { store } from "./store/store";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={DashboardPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
