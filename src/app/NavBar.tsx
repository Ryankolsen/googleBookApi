import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { allFavoriteBooks } from "../features/favoriteBooks/favoriteBookSlice";

export const NavBar = () => {
  console.log(allFavoriteBooks);
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand id="RouteNavLink" href="/">
            Google Book API
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={"/"}>Home</Nav.Link>
              <Nav.Link href="/Sanderson">Brandon Sanderson</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <Link id="NavDropdown" to={"/favoriteBooks"}>
                  Favorites
                </Link>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
