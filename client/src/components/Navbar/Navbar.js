import React, { Component } from "react";
import { Navbar as Nav, NavItem, Input } from "react-materialize";
import "../styles/Navbar.css";

class Navbar extends Component {
  state = {
    search: ""
  };
  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Nav className="transparent z-depth-0" right>
        <li>
          <Input
            value={this.state.search}
            onChange={this.handleInputChange}
            className="center-align"
            name="search"
            icon="search"
            label="Search"
          />
        </li>
        <NavItem>Sign In</NavItem>
        <NavItem>Register</NavItem>
      </Nav>
    );
  }
}

export default Navbar;
