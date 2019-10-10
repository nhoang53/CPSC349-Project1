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
                    <Form.Control type="email" placeholder="Email address" />
                  </Col>
                </Row>
                <Row>
                  <Col md="6" className="mb-4 mb-md-0">
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col md="6">
                    <Form.Control placeholder="Last name" />
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
