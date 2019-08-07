import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>Timesheetz For Real</Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/employees">Employees</NavLink>
            <NavLink to="/timesheets">Timesheetz</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
