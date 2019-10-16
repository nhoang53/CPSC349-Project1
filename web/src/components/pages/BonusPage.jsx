import React, { Component } from "react";

import {
  Container,
  Card,
  Accordion,
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
          <h1 className="my-5 text-center">BONUS!</h1>
          <h1 className="my-5 text-center">Do not leave yet! If you not interest to join our web just leave
          name and email here for a chance to win 1 of the 3 prize below. </h1>

          <Container className="text-center my-5">

            <Accordion>
              <Card>
                <Card.Header className="p-0">
                  <Accordion.Toggle
                    as={Button}
                    eventKey="0"
                    className="btn-block"
                    variant="link"
                  >
                    1st place: a vacation for 4 people in Ohio
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    You can enjoy with your family or with your friend in Ohio while in hot summer!
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header className="p-0">
                  <Accordion.Toggle
                    as={Button}
                    eventKey="1"
                    className="btn-block"
                    variant="link"
                  >
                    2nd prize: a brand new laptop with prize about 1000$
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    you can game all day long with it!
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header className="p-0">
                  <Accordion.Toggle
                    as={Button}
                    eventKey="2"
                    className="btn-block"
                    variant="link"
                  >
                    3rd prize: 1 month supply of noodle cup
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    Well! it is cheap and delicious!
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Container>



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
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
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
                      Summit
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
