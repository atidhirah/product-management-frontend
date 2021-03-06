import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { hideSidebar } from "../../actions/app";
import SidebarHeader from "./SidebarHeader";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  const appState = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const handleClose = (e) => {
    e.preventDefault();
    if (e.currentTarget === e.target) {
      dispatch(hideSidebar(true));
    }
  };

  let className = "sidebar-container";
  if (appState.hideSidebar) className += " hide-sidebar";

  return (
    <aside className={className} onClick={handleClose}>
      <div className="sidebar">
        <SidebarHeader />
        <ul className="sidebar-menu">
          <SidebarLink route="about-shop" value="About Shop" />
          <SidebarLink route="products" value="Products" />
          <SidebarLink route="supplies" value="Supplies" />
          <SidebarLink route="equipments" value="Equipments" />
          <SidebarLink route="history" value="History" />
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
