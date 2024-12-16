import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            <i className="fas fa-home"></i> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/analytics" activeClassName="active">
            <i className="fas fa-chart-line"></i> Analytics
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName="active">
            <i className="fas fa-cog"></i> Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
