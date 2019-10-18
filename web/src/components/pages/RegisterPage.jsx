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
              <Row className="mb-4">
                <Col>
                  <Form.Control type="text" placeholder="Username"  name="username" required />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Form.Control type="text" placeholder="First Name" name="firstName" required />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Last Name" name="lastName" required />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Form.Control type="text" placeholder="Account Type" name="userRole" required />
                </Col>
              </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control type="email" placeholder="Email Address" name="email" required />
                  </Col>
                  <Col>
                    <Form.Control type="password" placeholder="Password" name="password" required />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control type="text" placeholder="Location" name="location" required />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control type="text" placeholder="Love" name="love" required />
                  </Col>
                  <Col>
                    <Form.Control type="text" placeholder="Occupation" name="do" required />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control type="text" placeholder="Link To Share" name="userLink" required />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <form action="upload.php" method="post" enctype="multipart/form-data">
                    Upload your profile picture
                      <Form.Control type="file" name="photo" id="fileToUpload" />
                      <Form.Control type="submit" value="Upload Image" name="submit-pic" />
                    </form>
                  </Col>
              </Row>
                <Row>
                  <Col className="text-center">
                    <Button
                      className="mb-4"
                      variant="primary"
					  name="signup-submit"
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
