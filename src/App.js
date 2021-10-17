import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import HomeContainer from "./containers/Home";
import AuthContainer from "./containers/Auth";

import "./styles/index.css";

const App = () => {
  const { userId } = useSelector((state) => state.appState);

  return (
    <Router>
      <Route exact path="/">
        {!userId ? <Redirect to="/auth" /> : <HomeContainer />}
      </Route>
      <Route exact path="/auth" component={AuthContainer} />
    </Router>
  );
};

export default App;
