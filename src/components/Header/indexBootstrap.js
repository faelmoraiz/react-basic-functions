import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import "./Header.css";

export default function Headers() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">ReactJS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/counter">
            Contador
          </Nav.Link>
          <Nav.Link as={Link} to="/todos">
            Tarefas
          </Nav.Link>
          <Nav.Link as={Link} to="/text">
            Editor de texto
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
