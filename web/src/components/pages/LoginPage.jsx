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
      validated: false,
      checking: false,
      email: "",
      password: ""
    };
  }

  isValid(form) {
    const data = new FormData(form);
    const email = data.get("email");
    const password = data.get("password");

    let valid = false;

    form[0].setCustomValidity("Invalid");

    if (!email) {
      this.setState({ email: "Please enter a your email." });
    } else {
      if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/.test(email)) {
        this.setState({ email: "Please enter a valid email." });
      } else {
        form[0].setCustomValidity("");
        valid = true;
      }
    }

    form[1].setCustomValidity("Invalid");

    if (!password) {
      this.setState({ password: "Please enter a password." });
    } else {
      if (
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password) ||
        !/[0-9]/.test(password) ||
        !/[^a-zA-Z\d]/.test(password) ||
        password.length < 8
      ) {
        this.setState({
          password: "Your password must contain at least eight characters."
        });
      } else {
        form[1].setCustomValidity("");
        valid = true;
      }
    }

    this.setState({ validated: true });

    return valid;
  }

  onSubmit = event => {
    event.preventDefault();

    const form = event.target;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    if (this.isValid(form)) {
      this.setState({ checking: true });
      console.log("Call api to check to get token");
    }
  };

  render() {
    const { validated, checking, email, password } = this.state;

    return (
      <main role="main">
        <Container className="my-5">
          <h1 className="my-5 text-center">Log In</h1>

          <Card>
            <Card.Body>
              <Form noValidate validated={validated} onSubmit={this.onSubmit}>
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {email}
                    </Form.Control.Feedback>
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
                    <Form.Control.Feedback type="invalid">
                      {password}
                    </Form.Control.Feedback>
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
                {checking && (
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
