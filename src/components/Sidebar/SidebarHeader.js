import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth";

const SidebarHeader = () => {
  const { authData } = useSelector((state) => state.auth);
  const userData = authData.result;

  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="sidebar-header">
      <div>
        <p className="sidebar-shopname">{userData?.shop.shopName}</p>
        <p className="sidebar-fullname">{userData?.fullname}</p>
      </div>
      <button
        className="btn sidebar-logout"
        onClick={() => dispatch(logout(history))}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default SidebarHeader;
