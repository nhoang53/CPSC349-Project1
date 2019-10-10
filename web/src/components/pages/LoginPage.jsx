import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";

export default class RegisterPage extends Component {
  render() {
    return (
      <main role="main">
        <Container className="my-5">
          <h1 className="my-5 text-center">Log In</h1>

          <Card>
            <Card.Body>
              <Form>
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="Username"
                      required
                    />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Check
                      type="checkbox"
                      name="remember"
                      label="Remember me"
                    />
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
                      Login
                    </Button>
                  </Col>
                </Row>
                <Row className="text-center">
                  <Col sm="6">
                    <Link to="/register">New user?</Link>
                  </Col>
                  <Col sm="6">
                    <Link to="/forgot-password">Forgot password?</Link>
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
