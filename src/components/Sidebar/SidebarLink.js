import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideSidebar } from "../../actions/app";

const SidebarLink = ({ route, value }) => {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();

  return (
    <li className="sidebar-item">
      <NavLink
        className="sidebar-link"
        to={`${url}/${route}`}
        onClick={() => dispatch(hideSidebar(true))}
      >
        {value}
      </NavLink>
    </li>
  );
};

export default SidebarLink;
