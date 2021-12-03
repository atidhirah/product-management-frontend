import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DashboardContainer from "./containers/Dashboard";
import LoginContainer from "./containers/Login";
import RegisterContainer from "./containers/Register";
import "./styles/index.css";

const App = () => {
  const { authData } = useSelector((state) => state.auth);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {!authData ? <Redirect to="/login" /> : <Redirect to="/dashboard" />}
        </Route>
        <Route path="/dashboard" component={DashboardContainer}>
          {!authData ? <Redirect to="/login" /> : <DashboardContainer />}
        </Route>
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={RegisterContainer} />
      </Switch>
    </Router>
  );
};

export default App;
