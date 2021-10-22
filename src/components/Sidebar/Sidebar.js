import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../actions/app";
import { logout } from "../../actions/auth";

const Sidebar = () => {
  const { hideSidebar } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const handleClose = (e) => {
    e.preventDefault();
    if (e.currentTarget === e.target) {
      dispatch(toggleSidebar());
    }
  };

  let className = "sidebar-container";
  if (hideSidebar) className += " hide-sidebar";

  return (
    <aside className={className} onClick={handleClose}>
      <div className="sidebar">
        <button className="btn" onClick={() => dispatch(logout())}>
          LOGOUT
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
