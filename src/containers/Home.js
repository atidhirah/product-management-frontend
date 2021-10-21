import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/auth";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="home-container">
      <h1>HOME CONTAINER</h1>
      <button className="btn" onClick={handleLogout}>
        LOGOUT
      </button>
    </div>
  );
};

export default HomeContainer;
