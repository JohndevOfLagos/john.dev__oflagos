import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./SidebarNavigation.scss";

export const SidebarNavigation = ({isOpen, Onclose}) => {
  return (
    <div className={`sidebarNavigation ${isOpen? "open" : " "}`} onClick={Onclose}>
      <div className="sidebarNavigation-inner">
        <button className="sidebar-cancle" onClick={Onclose}>
        <Icon icon="fxemoji:cancellationx" />
        </button>
        <div className="sidebar-header">Johndeoflagos</div>

        <ul className="sidebar-nav">
        <NavLink to="/"  className={({ isActive }) =>
              `${isActive ? "active" : ""}`
            }>
       <div className="sidebar-home">
          <h4><Icon icon="lucide:home" />Home</h4>
        </div>
       </NavLink>
          <NavLink to="/Home/support-me"  className={({ isActive }) =>
              `sidebar-navLink ${isActive ? "active" : ""}`
            }>
            <li className="sidebar-nav-item">
              <Icon icon="streamline:give-gift" />
              <span>Support Me</span>
            </li>
          </NavLink>

          <NavLink to="/Home/projects"  className={({ isActive }) =>
              `sidebar-navLink ${isActive ? "active" : ""}`
            }>
            <li className="sidebar-nav-item">
              <Icon icon="material-symbols:dashboard-outline" />
              <span>Projects</span>
            </li>
          </NavLink>
          <NavLink to="/Home/services"  className={({ isActive }) =>
              `sidebar-navLink ${isActive ? "active" : ""}`
            }>
            <li className="sidebar-nav-item">
              <Icon icon="material-symbols:dashboard-outline" />
              <span>Services</span>
            </li>
          </NavLink>

          <NavLink to="/Home/resume"  className={({ isActive }) =>
              `sidebar-navLink ${isActive ? "active" : ""}`
            }>
            <li className="sidebar-nav-item">
              <Icon icon="pepicons-print:file" />
              <span>Resume</span>
            </li>
          </NavLink>
          <NavLink to="/Home/skills"  className={({ isActive }) =>
              `sidebar-navLink ${isActive ? "active" : ""}`
            }>
            <li className="sidebar-nav-item">
            <Icon icon="game-icons:skills" />
              <span>Skills</span>
            </li>
          </NavLink>


          <NavLink to="/Home/about"  className={({ isActive }) =>
              `sidebar-navLink ${isActive ? "active" : ""}`
            }>
            <li className="sidebar-nav-item">
              <Icon icon="mdi:about-circle-outline" />
              <span>About</span>
            </li>
          </NavLink>

          <NavLink to="/Home/contact"  className={({ isActive }) =>
              `sidebar-navLink ${isActive ? "active" : ""}`
            }>
            <li className="sidebar-nav-item">
              <Icon icon="mdi:contact" />
              <span>Contact</span>
            </li>
          </NavLink>

          <NavLink to="/Home/help"  className={({ isActive }) =>
              `sidebar-navLink ${isActive ? "active" : ""}`
            }>
            <li className="sidebar-nav-item">
              <Icon icon="material-symbols:help-outline" />
              <span>Help</span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};
