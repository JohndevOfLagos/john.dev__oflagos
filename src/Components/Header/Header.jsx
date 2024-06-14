import React from "react";
import "./Header.scss"
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";



export const Header = ({onpenSidebar}) => {
  return (
    <div className="header-wrapper">
      <div className="header-body">
        <button className="header-cancle-btn" onClick={onpenSidebar}>
        <Icon icon="heroicons-solid:menu-alt-3" />
        </button>
        <ul className="nav-items">
          <NavLink className="navlinks">
             <li >
              Home
             </li>
          </NavLink>
          <NavLink className="navlinks">
             <li >
              Support Me
             </li>
          </NavLink>
          <NavLink className="navlinks">
             <li >
              Projects
             </li>
          </NavLink>
          <NavLink className="navlinks">
             <li >
              Resume
             </li>
          </NavLink>
          <NavLink className="navlinks">
             <li >
              Skills
             </li>
          </NavLink>
        </ul>
        <button className="header-hire">
           Contact
          <Icon icon="mingcute:external-link-line" />
        </button>
      </div>
    </div>
  );
};
