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
                  <Form.Control type="text" name="username" placeholder="Username" />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Form.Control type="text" name="userRole" placeholder="Account Type" />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Form.Control type="text" name="firstName" placeholder="First Name" />
                </Col>
                <Col>
                  <Form.Control type="text" name="lastName" placeholder="Last Name" />
                </Col>
              </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control type="email" name="email" placeholder="Email Address" />
                  </Col>
                  <Col>
                    <Form.Control type="password" name="password" placeholder="Password" />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control type="text" name="location" placeholder="Location" />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control type="text" name="love" placeholder="Love" />
                  </Col>
                  <Col>
                    <Form.Control type="text" name="do" placeholder="Occupation" />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control type="text" name="userLink" placeholder="Link To Share" />
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
