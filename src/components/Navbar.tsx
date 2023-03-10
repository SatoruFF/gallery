import React from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar__wrapper content">
        <div className="link__btns">
          <NavLink to="/Welcome">Home page</NavLink>
          <NavLink to="/Works">Works&Contacts</NavLink>
        </div>
    </div>
  );
};

export default Navbar;
