import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

const SidebarLink = ({ route, value }) => {
  const { url } = useRouteMatch();
  return (
    <li className="sidebar-item">
      <NavLink className="sidebar-link" to={`${url}/${route}`}>
        {value}
      </NavLink>
    </li>
  );
};

export default SidebarLink;
