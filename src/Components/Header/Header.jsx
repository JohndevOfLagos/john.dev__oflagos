import React from "react";
import "./Header.scss"
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

export const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-body">
        <button className="header-cancle-btn">
        <Icon icon="streamline:bracket" />
        </button>
        <ul className="nav-items">
          <NavLink className="navlinks">
             <li >
              Home
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
              About
             </li>
          </NavLink>
          <NavLink className="navlinks">
             <li >
              Contact
             </li>
          </NavLink>
        </ul>
        <button className="header-hire">
          Hire me!
        </button>
      </div>
    </div>
  );
};
