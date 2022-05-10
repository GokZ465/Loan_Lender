import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import React from "react";
import Avatar from "./Avatar";

import DashboardIcon from "../../assets/dashboard_icon.svg";
import AddIcon from "../../assets/add_icon.svg";
import { useAuthContext } from "../../hooks/useAuthContext";
export default function Sidebar() {
  const { user } = useAuthContext();

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={user.photoURL} />
          <p>Hey {user.displayName}</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/dashboard">
                <img src={AddIcon} alt="add project icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/profile">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Profile</span>
                {console.log("DashboardIcon sidebar is working")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/request">
                <img src={AddIcon} alt="add project icon" />
                <span>Request Loan</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/pending">
                <img src={AddIcon} alt="add project icon" />
                <span>Pending Loan</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/pay">
                <img src={AddIcon} alt="add project icon" />
                <span>Pay</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
