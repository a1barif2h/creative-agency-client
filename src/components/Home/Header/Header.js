import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logos/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Container>
      <Navbar className="pt-3" expand="lg">
        <Navbar.Brand href="/home">
          <img style={{ width: "150px" }} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mr-4 nav-link" href="/home">
              Home
            </Nav.Link>
            <Nav.Link className="mr-4 nav-link" href="/portfolio">
              Our Portfolio
            </Nav.Link>
            <Nav.Link className="mr-4 nav-link" href="/team">
              Our Team
            </Nav.Link>
            <Nav.Link className="mr-4 nav-link" href="/contact">
              Contact Us
            </Nav.Link>
            <Nav.Link className="mr-4" href="/login">
              <button
                style={{ background: "#111430", color: "#ffffff" }}
                className="btn "
              >
                Login
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
