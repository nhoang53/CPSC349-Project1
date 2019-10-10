import React, { Component } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";

export default class RegisterPage extends Component {
  render() {
    return (
      <main role="main">
        <Container className="my-5 text-center">
          <h1 className="my-5">Registration</h1>

          <Card>
            <Card.Body>
              <Form>
              <Row>
                <Col md="6" className="mb-4">
                  <Form.Control placeholder="First name" name="firstName" required />
                </Col>
                <Col md="6">
                  <Form.Control placeholder="Last name" name="lastName" required />
                </Col>
              </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control type="email" placeholder="Email address"  name="email" required />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control type="password" placeholder="Password" name="password" required />
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <Button
                      className="mb-4"
                      variant="primary"
                      type="submit"
                      block
                    >
                      Sign Up
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </main>
    );
  }
}
