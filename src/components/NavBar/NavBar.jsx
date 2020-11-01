import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import "./NavBar.css";

const NavBar = ({ user, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {user ? (
        // If user is logged in they will see their avatar
        <NavBar color="light" light expand="md">
          {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            {/* // Take me Home/Fridge */}
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink id="navItem" href="/">
                  Welcome, {user.name}
                </NavLink>
              </NavItem>
              {/* // Take me to shopping list */}
              <NavItem>
                <NavLink id="navItem" href="/shopping-list">
                  Shopping List
                </NavLink>
              </NavItem>
              {/* // Take me to favorite recipes */}
              <NavItem>
                <NavLink id="navItem" href="/favorites">
                  Favorite Recipes
                </NavLink>
              </NavItem>
              {/* // Let me logout */}
              <NavItem>
                <NavLink id="navItem" href=" " onClick={handleLogout}>
                  Log Out
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              {/* this will be replaced with a real user image */}
              <Link
                to={{
                  pathname: "/user",
                  state: { user },
                }}
              >
                <img
                  src={
                    user.avatar ? user.avatar : "https://picsum.photos/50/50"
                  }
                  id="user-avatar"
                  alt=""
                />
              </Link>
            </NavbarText>
          </Collapse>
        </NavBar>
      ) : (
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/login">Log In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/users">Users</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">Signup</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              {/* this will be replaced with a real user image */}
              <Link
                to={{
                  pathname: "/login",
                }}
              >
                <img
                  src="https://picsum.photos/50/50"
                  id="user-avatar"
                  alt=""
                />
              </Link>
            </NavbarText>
          </Collapse>
        </Navbar>
      )}
    </>
  );
};

export default NavBar;
