import React from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Sidebar from "../components/Sidebar/Sidebar";

const HomeContainer = () => {
  return (
    <div className="home-container">
      <TopNavigation />
      <Sidebar />
    </div>
  );
};

export default HomeContainer;
