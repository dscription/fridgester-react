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
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h3" style={{ flexGrow: '1' }}>
              Fridgester
            </Typography>
            <Link to="/">
              <Button style={{color: 'white'}}>
                <Typography variant="h5">My Fridge</Typography>
              </Button>
            </Link>

            <Button style={{color: 'white'}} onClick={handleLogout}>
              <Typography variant="h5" >Logout</Typography>
            </Button>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h3" style={{ flexGrow: '1' }}>
              Fridgester
            </Typography>
            <Link to="/signup">
              <Button style={{color: 'white'}}>
                <Typography variant="h5">Signup</Typography>
              </Button>
            </Link>
            <Link to="/login">
              <Button style={{color: 'white'}}>
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
