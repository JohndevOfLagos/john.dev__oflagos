import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";



export const Header = ({ onpenSidebar }) => {
  return (
    <div className="header-wrapper">
      <div className="header-body">
        <button className="header-cancle-btn" onClick={onpenSidebar}>
          <Icon icon="heroicons-solid:menu-alt-3" />
        </button>
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
            to="/Home/resume"
          >
            <li>Resume</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => `navlinks ${isActive ? "active" : ""}`}
            to="/Home/skills"
          >
            <li>Skills</li>
          </NavLink>
        </ul>
        <Link className="header-hire" to="/Home/contact">
          <span>
          Contact
          </span>
          <Icon icon="mingcute:external-link-line" />
        </Link>
      </div>
    </div>
  );
};
