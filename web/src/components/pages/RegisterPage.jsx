import React, { Component } from "react";
import {
  Container,
  Card,
  Form,
  Row,
  Col,
  Image,
  Button,
  InputGroup
} from "react-bootstrap";
import bsCustomFileInput from "bs-custom-file-input";

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checking: false,
      validEmail: true,
      validPassword: true,
      submit: false
    };
  }

  componentDidMount() {
    bsCustomFileInput.init();
  }

  showImage = event => {
    this.setState({ image: URL.createObjectURL(event.target.files[0]) });
  };

  onSubmit = event => {
    event.preventDefault();

    this.setState({
      image: null,
      submit: true,
      checking: true,
      validEmail: true,
      validPassword: true
    });

    var formData = new FormData(event.target);

    if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/.test(formData.get("email"))) {
      this.setState({ validEmail: false });
    }

    console.log("Call api to check to get token");
  };

  render() {
    let image = <span className="text-muted">Choose your portfolio image</span>;

    if (this.state.image) {
      image = <Image src={this.state.image} alt="Main image" fluid />;
    }

    return (
      <main role="main">
        <Container className="my-5 text-center">
          <h1 className="my-5">Registration</h1>

          <Card>
            <Card.Body>
              <Form onSubmit={this.onSubmit}>
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="First name"
                      name="firstName"
                      required
                      autoFocus={true}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Last name"
                      name="lastName"
                      required
                    />
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
                  </Col>
                  <Col>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      required
                    />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col md="6" className="mx-auto">
                    {image}
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <div className="custom-file mb-4">
                      <Form.Control
                        id="image"
                        type="file"
                        className="custom-file-input"
                        accept="image/*"
                        onChange={this.showImage}
                        required
                      />
                      <Form.Label htmlFor="image" className="custom-file-label">
                        Choose your portfolio image
                      </Form.Label>
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
                        name="userLink"
                        required
                      />
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
                  </Col>
                </Row>
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
