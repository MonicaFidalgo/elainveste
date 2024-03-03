import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import logo from "../../logo2.svg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" className="navbar-component">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={() => {
            setExpanded(expanded ? false : "expanded");
          }}
        >
          <img src={logo} className="logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => {
            setExpanded(expanded ? false : "expanded");
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link
              as={Link}
              to="/produtos"
              onClick={() => setExpanded(false)}
            >
              Produtos
            </Nav.Link> */}
            <Nav.Link as={Link} to="/livros" onClick={() => setExpanded(false)}>
              Livros
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" onClick={() => setExpanded(false)}>
              Blog
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="https://www.linkedin.com/company/elainveste/"
            >
              <i className="fa-brands fa-linkedin-in"></i>
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
