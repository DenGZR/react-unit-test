import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../../logo.svg';
import { NavLink as RRNavLink } from 'react-router-dom';


function Header() {
  return (
    <header>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <Nav>
        <NavItem>
          <NavLink tag={RRNavLink} to='/'>JSONPlaceholder</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to='/jest-simple'>Jest Simple</NavLink>
        </NavItem>
      </Nav>
      <hr />
    </header>
  )
}

export default Header;
