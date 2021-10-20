import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomeContainer from "./containers/Home";
import AuthContainer from "./containers/Auth";
import "./styles/index.css";

const App = () => {
  const { authData } = useSelector((state) => state.appState);
  console.log(authData);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {!authData ? <Redirect to="/auth" /> : <HomeContainer />}
        </Route>
        <Route exact path="/auth" component={AuthContainer} />
      </Switch>
    </Router>
  );
};

export default App;
