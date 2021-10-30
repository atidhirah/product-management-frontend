import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../actions/app";
import { ReactComponent as Bars } from "../../images/icons/bars.svg";

const TopNavigation = () => {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <nav className="topnav">
        <div className="topnav-logo">Cafe Management</div>
        <button
          className="topnav-mobile"
          onClick={() => dispatch(toggleSidebar())}
        >
          <Bars />
        </button>
      </nav>
    </header>
  );
};

export default TopNavigation;
