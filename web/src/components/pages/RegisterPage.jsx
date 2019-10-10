import React, { Component } from "react";
import { Container, Card, Form, Row, Col } from "react-bootstrap";

export default class RegisterPage extends Component {
  render() {
    return (
      <main role="main">
        <Container className="my-5 text-center">
          <h1 className="my-5">Registration</h1>

          <Card>
            <Card.Body>
              <Form>
              <Row className="mb-4">
                <Col>
                  <Form.Control type="text" name="username" placeholder="Username"  required />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Form.Control type="text" name="userRole" placeholder="Account Type" required />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Form.Control type="text" name="firstName" placeholder="First Name" required />
                </Col>
                <Col>
                  <Form.Control type="text" name="lastName" placeholder="Last Name" required />
                </Col>
              </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control type="email" name="email" placeholder="Email Address" required />
                  </Col>
                  <Col>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control type="text" name="location" placeholder="Location" required />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control type="text" name="love" placeholder="Love" required />
                  </Col>
                  <Col>
                    <Form.Control type="text" name="do" placeholder="Occupation" required />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control type="text" name="userLink" placeholder="Link To Share" required />
                  </Col>
                </Row>
                <button type="submit" class="btn btn-primary" name="signup-submit">Sign Up</button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </main>
    );
  }
}
