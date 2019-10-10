import React, { Component } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";

export default class ContactPage extends Component {
  render() {
    return (
      <main role="main">
        <Container className="my-5 text-center">
          <h1 className="my-5">Contact Us</h1>

          <Card>
            <Card.Body>
              <Form>
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      required
                    />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      as="textarea"
                      rows="5"
                      name="message"
                      placeholder="Message"
                      required
                    />
                  </Col>
                </Row>
                <Button className="mb-4" variant="primary" type="submit" block>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </main>
    );
  }
}
