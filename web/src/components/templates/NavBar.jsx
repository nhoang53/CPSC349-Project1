import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Button } from "react-bootstrap";

class NavBar extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    return (
      <Navbar expand="md" className="text-uppercase" bg="dark" variant="dark">
        <LinkContainer exact to="/">
          <Navbar.Brand>Portfolio Center</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/features">
              <Nav.Link>Features</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pricing">
              <Nav.Link>Pricing</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <Button
              variant="info"
              size="sm"
              className="ml-md-4"
              onClick={() => {
                this.props.history.push("/register");
              }}
            >
              Create your portfolio
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
