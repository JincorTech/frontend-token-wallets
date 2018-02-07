import React, { Component } from 'react';
import { Nav, NavLink, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

class Header extends Component {
  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
    const {
      logout,
      email,
      name
    } = this.props;

    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <NavbarBrand href="#"></NavbarBrand>
        <Nav className="ml-auto pr-4" navbar>
          <NavItem className="px-3">
            {name} | {email}
          </NavItem>
          <NavLink href="#" onClick={() => logout()}><i className="icon-lock"></i> Logout</NavLink>
        </Nav>
      </header>
    );
  }
}

export default Header;
