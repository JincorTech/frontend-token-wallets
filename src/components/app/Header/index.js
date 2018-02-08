import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavLink, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

import { namedRoutes } from '../../../routes';

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
      ethAddress,
      name
    } = this.props;

    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <NavbarBrand tag={Link} to={namedRoutes.dashboard}/>
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <i className="fa fa-fw fa-user-o"/> {name}
          </NavItem>
          <NavItem className="px-3">
            <i className="fa fa-fw fa-credit-card"/> {ethAddress}
          </NavItem>
        </Nav>
        <Nav className="d-md-down-none ml-auto pr-4" navbar>
          <NavItem className="px-3">
            <NavLink tag={Link} to={namedRoutes.dashboard}><i className="fa fa-fw fa-tachometer"/> Dashboard</NavLink>
          </NavItem>
          <NavItem className="d-md-down-none px-3">
            <NavLink tag={Link} to={namedRoutes.settings}><i className="fa fa-fw fa-cog"/> Settings</NavLink>
          </NavItem>
          <NavItem className="d-md-down-none px-3">
            <NavLink href="#" onClick={() => logout()}><i className="fa fa-fw fa-sign-out"/> Logout</NavLink>
          </NavItem>
        </Nav>
      </header>
    );
  }
}

export default Header;
