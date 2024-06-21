import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";



export const Header = ({ onpenSidebar }) => {
  return (
    <div className="header-wrapper">
      <div className="header-body">

        <div className="brand-name-logo">
          <h4>LOGO</h4>
          <img src="" alt="" />
        </div>

        <nav>
        <ul className="nav-items">
          <NavLink
            className={({ isActive }) => `navlinks ${isActive ? "active" : ""}`}
            to="/"
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => `navlinks ${isActive ? "active" : ""}`}
            to="/Home/support-me"
          >
            <li>Support Me</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => `navlinks ${isActive ? "active" : ""}`}
            to="/Home/projects"
          >
            <li>Projects</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => `navlinks ${isActive ? "active" : ""}`}
            to="/Home/services"
          >
            <li>Services</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => `navlinks ${isActive ? "active" : ""}`}
            to="/Home/contact"
          >
            <li>Contact</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => `navlinks ${isActive ? "active" : ""}`}
            to="/Home/blogs"
          >
            <li>Blog</li>
          </NavLink>
        </ul>
      
        <div className="header-hire" >
        <button class="button" type="button" to="/Home/contact">
                <span class="button__text">Download CV</span>
                <span class="button__icon">
                  <Icon icon="material-symbols:download" />
                </span>
              </button>
        </div>
        <button className="header-menu-btn" onClick={onpenSidebar}>
          <Icon icon="heroicons-solid:menu-alt-3" />
        </button>
        </nav>




   
 
      </div>
    </div>
  );
};
