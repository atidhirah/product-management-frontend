import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Sidebar from "../components/Sidebar/Sidebar";

const DashboardContainer = () => {
  const { authData } = useSelector((state) => state.auth);
  console.log(authData);
  const { path } = useRouteMatch();

  return (
    <div className="dashboard-container">
      <TopNavigation />
      <Sidebar />
      <div className="main-container">
        <Switch>
          <Route exact path={[`${path}`, `${path}/about-shop`]}>
            <div>About Shop</div>
          </Route>
          <Route exact path={`${path}/products`}>
            <div>Products</div>
          </Route>
          <Route exact path={`${path}/supplies`}>
            <div>Supplies</div>
          </Route>
          <Route exact path={`${path}/equipments`}>
            <div>Equipments</div>
          </Route>
          <Route exact path={`${path}/history`}>
            <div>History</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default DashboardContainer;
