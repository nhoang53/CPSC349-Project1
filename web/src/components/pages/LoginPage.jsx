import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Card,
  Form,
  Row,
  Col,
  Button,
  Spinner
} from "react-bootstrap";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checking: false
    };
  }

  onSubmit = event => {
    event.preventDefault();

    this.setState({ checking: true });

    console.log("Call api to check to get token");
  };

  render() {
    return (
      <main role="main">
        <Container className="my-5">
          <h1 className="my-5 text-center">Log In</h1>

          <Card>
            <Card.Body>
              <Form onSubmit={this.onSubmit}>
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email"
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
                {this.state.checking && (
                  <Row className="mb-4 text-center">
                    <Col>
                      <Spinner animation="grow" />
                    </Col>
                  </Row>
                )}
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
