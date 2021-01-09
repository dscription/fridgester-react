import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import './NavBar.css';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const NavBar = ({ user, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {user ? (
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink id="navItem" href="/">
                  Your Fridge
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="navItem" href=" " onClick={handleLogout}>
                  Log Out
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      ) : (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h3" style={{ flexGrow: '1' }}>
              Fridgester
            </Typography>
            <Link to="/signup">
              <Button>
                <Typography variant="h5">Signup</Typography>
              </Button>
            </Link>
            <Link to="/login">
              <Button color="white">
                <Typography variant="h5">Login</Typography>
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default NavBar;

{
  /* <Navbar color="light" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/login">Log In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">Signup</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar> */
}
