import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/posts">POSTS</NavLink>
          </li>
          <li>
            <NavLink to="/new-post">NEW POST</NavLink>
          </li>
          <li>
            <NavLink to="/auth">AUTH</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
