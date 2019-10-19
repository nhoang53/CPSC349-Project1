import React, { Component } from "react";
import {
  Container,
  Card,
  Form,
  Row,
  Col,
  Image,
  Button,
  InputGroup,
  Spinner
} from "react-bootstrap";
import bsCustomFileInput from "bs-custom-file-input";

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
      checking: false,
      image: null,
      fullname: "",
      email: "",
      password: "",
      repassword: "",
      link: ""
    };
  }

  componentDidMount() {
    bsCustomFileInput.init();
  }

  isValid(form) {
    const data = new FormData(form);
    const fullName = data.get("fullName");
    const email = data.get("email");
    const password = data.get("password");
    const repassword = data.get("reassword");
    const link = data.get("link");

    let valid = false;

    form[0].setCustomValidity("Invalid");

    if (!fullName) {
      this.setState({ fullname: "Please enter your full name." });
    } else {
      if (!/\S+\x20\S+/.test(fullName)) {
        this.setState({ fullname: "Please enter your first and last name." });
      } else {
        form[0].setCustomValidity("");
        valid = true;
      }
    }

    form[1].setCustomValidity("Invalid");

    if (!email) {
      this.setState({ email: "Please enter a your email." });
    } else {
      if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/.test(email)) {
        this.setState({ email: "Please enter a valid email." });
      } else {
        form[1].setCustomValidity("");
        valid = true;
      }
    }

    form[2].setCustomValidity("Invalid");

    if (!password) {
      this.setState({ password: "Please enter a password." });
    } else {
      if (!/[A-Z]/.test(password)) {
        this.setState({
          password: "Your password must contain at least one uppercase letter."
        });
      } else if (!/[a-z]/.test(password)) {
        this.setState({
          password: "Your password must contain at least one lowercase letter."
        });
      } else if (!/[0-9]/.test(password)) {
        this.setState({
          password: "Your password must contain at least one number."
        });
      } else if (!/[^a-zA-Z\d]/.test(password)) {
        this.setState({
          password: "Your password must contain at least one special character."
        });
      } else if (password.length < 8) {
        this.setState({
          password: "Your password must contain at least eight characters."
        });
      } else {
        form[2].setCustomValidity("");
        valid = true;
      }
    }

    form[3].setCustomValidity("Invalid");

    if (!repassword) {
      this.setState({ repassword: "Please enter a password." });
    } else {
      if (repassword !== password) {
        this.setState({
          repassword: "Passwords do not match."
        });
      } else {
        form[3].setCustomValidity("");
        valid = true;
      }
    }

    form[5].setCustomValidity("Invalid");

    if (!link) {
      this.setState({ link: "Please enter a link." });
    } else {
      form[5].setCustomValidity("");
      valid = true;
    }

    this.setState({ validated: true });

    return valid;
  }

  showImage = event => {
    this.setState({ image: URL.createObjectURL(event.target.files[0]) });
  };

  onSubmit = event => {
    event.preventDefault();

    const form = event.target;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    if (this.isValid(form)) {
      this.setState({ checking: true });

      console.log("Call api to check to get confirmation of registration");
    }
  };

  render() {
    const {
      validated,
      checking,
      image,
      fullname,
      email,
      password,
      repassword,
      link
    } = this.state;

    let imageContent = (
      <span className="text-muted">Choose your portfolio image.</span>
    );

    if (image) {
      imageContent = <Image src={image} alt="Main image" fluid />;
    }

    return (
      <main role="main">
        <Container className="my-5 text-center">
          <h1 className="my-5">Registration</h1>

          <Card>
            <Card.Body>
              <Form noValidate validated={validated} onSubmit={this.onSubmit}>
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Full name"
                      name="fullName"
                      required
                      autoFocus={true}
                    />
                    <Form.Control.Feedback type="invalid">
                      {fullname}
                    </Form.Control.Feedback>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      type="email"
                      placeholder="Email address"
                      name="email"
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
                      placeholder="Password"
                      name="password"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {password}
                    </Form.Control.Feedback>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
                      name="repassword"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {repassword}
                    </Form.Control.Feedback>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col md="6" className="mx-auto">
                    {imageContent}
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <div className="custom-file mb-4">
                      <Form.Label htmlFor="image" className="custom-file-label">
                        Choose your portfolio image
                      </Form.Label>
                      <Form.Control
                        id="image"
                        type="file"
                        className="custom-file-input form-control"
                        accept="image/*"
                        onChange={this.showImage}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose an image.
                      </Form.Control.Feedback>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon3">
                          https://porfoliocenter.com/user/
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="text"
                        placeholder="Link to share"
                        name="link"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {link}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      as="textarea"
                      rows="5"
                      name="summary"
                      placeholder="Give us a summary about yourself."
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please tell us a little bit about who you are.
                    </Form.Control.Feedback>
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
                    <Button variant="primary" type="submit" block>
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
