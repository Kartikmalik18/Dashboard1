import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">ability<span>EX</span></div>
      <div className="search-bar">
        <select>
          <option value="courses">Courses</option>
        </select>
        <input type="text" placeholder="What are you looking for?" />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="profile">
        <i className="fas fa-bell"></i>
        <span>John Antony</span>
        <div className="profile-img"></div>
      </div>
    </div>
  );
}

export default Header;
