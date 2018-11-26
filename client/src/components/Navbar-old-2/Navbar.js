import React from "react";
import { Navbar as Nav, NavItem } from "react-materialize";
import "../styles/Navbar.css";

const Navbar = props => {
  if (props.isLoggedIn) {
    return (
      <Nav className="transparent z-depth-0" right>
        <NavItem>Profile</NavItem>
      </Nav>
    );
  } else {
    return (
      <Nav className="transparent z-depth-0" right>
        <NavItem>Sign In</NavItem>
        <NavItem>Register</NavItem>
      </Nav>
    );
  }
};

export default Navbar;
