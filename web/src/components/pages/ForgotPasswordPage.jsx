import React, { Component } from "react";
import { Container, Card, Form, Row, Col } from "react-bootstrap";

export default class ForgotPasswordPage extends Component {
  render() {
    return (
      <main role="main">
        <Container className="my-5 text-center">
          <h1 className="my-5">Forgot Password</h1>

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
                      placeholder="New Password"
                      required
                    />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      type="password"
                      name="repeat password"
                      placeholder="Repeat Password"
                      required
                    />
                  </Col>
                </Row>
                <button
                  type="submit"
                  class="btn btn-primary"
                  name="rspwd-submit"
                >
                  Confirm
                </button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </main>
    );
  }
}
