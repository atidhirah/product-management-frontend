import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DashboardContainer from "./containers/Dashboard";
import AuthContainer from "./containers/Auth";
import "./styles/index.css";

const App = () => {
  const { authData } = useSelector((state) => state.auth);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {!authData ? <Redirect to="/auth" /> : <Redirect to="/dashboard" />}
        </Route>
        <Route path="/dashboard" component={DashboardContainer}>
          {!authData ? <Redirect to="/auth" /> : <DashboardContainer />}
        </Route>
        <Route path="/auth" component={AuthContainer} />
      </Switch>
    </Router>
  );
};

export default App;
