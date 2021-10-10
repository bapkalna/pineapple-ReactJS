import React, { Component } from "react";
import { Navbar, NavbarBrand, NavItem, Container } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
          <Navbar className="top-bar ">
            <NavbarBrand className="logo-image">
              <img src="assets/images/Union.svg" alt="Logo" />
            </NavbarBrand>
            <NavbarBrand className="logo-text">
              <img src="assets/images/pineapple..svg" alt="Logo-text" />
            </NavbarBrand>
            <NavItem>
              <NavLink
                activeClassName="nav-item"
                className="nav-link-about"
                to="#"
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                activeClassName="nav-item"
                className="nav-link-how"
                to="#"
              >
                How it works
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                activeClassName="nav-item"
                className="nav-link-contact"
                to="#"
              >
                Contact
              </NavLink>
            </NavItem>
          </Navbar>
        
      </React.Fragment>
    );
  }
}

export default Header;
