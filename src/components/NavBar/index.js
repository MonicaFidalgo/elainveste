import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import logo from "../../elainvestelogotipo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="navbar-component">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} className="logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="https://www.tiktok.com/@elainveste.oficial">
              <i className="fa-brands fa-tiktok"></i>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="https://www.instagram.com/elainveste.oficial/"
            >
              <i className="fa-brands fa-instagram"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
