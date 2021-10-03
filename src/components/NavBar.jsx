import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>Dating</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/">
              <Nav.Link as="div">Home</Nav.Link>
            </Link>
            <Link to="/about-us">
              <Nav.Link as="div">About us</Nav.Link>
            </Link>
            <Link to="/contact-us">
              <Nav.Link as="div">Contact us</Nav.Link>
            </Link>
            <Link to="/membership-plans">
              <Nav.Link as="div">Membership plans</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
