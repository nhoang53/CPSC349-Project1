import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Jumbotron, Row, Col, Nav } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Jumbotron className="mb-0">
          <Row>
            <Col md="3">Portfolio Creator</Col>
            <Col md="3">
              <h6>Product</h6>
              <Nav className="flex-column">
                <LinkContainer exact to="/features">
                  <Nav.Link>Features</Nav.Link>
                </LinkContainer>
                <LinkContainer exact to="/pricing">
                  <Nav.Link>Pricing</Nav.Link>
                </LinkContainer>
              </Nav>
            </Col>
            <Col md="3">
              <h6>Company</h6>
              <Nav className="flex-column">
                <LinkContainer exact to="/features">
                  <Nav.Link>About Us</Nav.Link>
                </LinkContainer>
              </Nav>
            </Col>
            <Col md="3" className="text-right">
              &copy; 2019 Burden United
            </Col>
          </Row>
        </Jumbotron>
      </footer>
    );
  }
}
