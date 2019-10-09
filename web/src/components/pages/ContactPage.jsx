import React, { Component } from "react";
import { Container, Card, Form, Row, Col } from "react-bootstrap";

export default class RegisterPage extends Component {
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
                  <Form.Control type="text" placeholder="Name" />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Form.Control type="text" placeholder="Email" />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Form.Control type="textarea" rows="5" cols="50" placeholder="Message" />
                </Col>
              </Row>
                <button type="submit" class="btn btn-primary" name="contact-submit">Submit</button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </main>
    );
  }
}
