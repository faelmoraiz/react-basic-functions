import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Badge } from "react-bootstrap";

import "./Header.css";

export default class Headers extends React.Component {
  state = {
    counter: 0
  };

  handleClick = e => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          ReactJS
        </Navbar.Brand>
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
          <Nav>
            <Nav.Link onClick={this.handleClick}>
              Notificações{" "}
              <Badge variant="success">
                {this.state.counter ? this.state.counter : ""}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
