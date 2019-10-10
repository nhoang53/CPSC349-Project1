import React, { Component } from "react";
import { Container, Card, Form, Row, Col } from "react-bootstrap";

export default class RegisterPage extends Component {
  render() {
    return (
      <main role="main">
        <Container className="my-5 text-center">
          <h1 className="my-5">Log In</h1>

          <Card>
            <Card.Body>
              <Form>
              <Row className="mb-4">
                <Col>
                  <Form.Control type="text" name="username" placeholder="Username" />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Form.Control type="password" name="password" placeholder="Password" />
                </Col>
              </Row>

                <button type="submit" class="btn btn-primary" name="login-submit">Log in</button>

              <Row className="mb-2">
                <a href="/register">New User? &nbsp;&nbsp;</a>
                <a href="/forgotpwd">Forgot password?</a>
              </Row>
              </Form>

            </Card.Body>
          </Card>
        </Container>
      </main>
    );
  }
}
