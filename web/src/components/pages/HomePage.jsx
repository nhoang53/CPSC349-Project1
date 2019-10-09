import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Container, Row, Col, Button, Jumbotron } from "react-bootstrap";

class HomePage extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  toRegistration = () => {
    this.props.history.push("/register");
  };

  render() {
    return (
      <React.Fragment>
        <header className="bg-dark text-light">
          <Container className="py-5">
            <Row className="py-5">
              <Col md="6">
                <h2 className="text-light">Show the world what you can do.</h2>
                <div class="mb-4">Create a page to show off your projects.</div>
                <Button variant="info" block onClick={this.toRegistration}>
                  Create your portfolio
                </Button>
              </Col>
            </Row>
          </Container>
        </header>

        <main role="main">
          <Container>
            <Row className="py-5">
              <Col md="4">
                <h3 class="text-center">Feature 1</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio, necessitatibus aspernatur veniam repellendus modi
                  culpa dolores cumque sapiente explicabo ad perferendis
                  doloribus ex. Commodi eius excepturi, libero necessitatibus
                  enim voluptatibus.
                </p>
              </Col>
              <Col md="4">
                <h3 class="text-center">Feature 2</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio, necessitatibus aspernatur veniam repellendus modi
                  culpa dolores cumque sapiente explicabo ad perferendis
                  doloribus ex. Commodi eius excepturi, libero necessitatibus
                  enim voluptatibus.
                </p>
              </Col>
              <Col md="4">
                <h3 class="text-center">Feature 3</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio, necessitatibus aspernatur veniam repellendus modi
                  culpa dolores cumque sapiente explicabo ad perferendis
                  doloribus ex. Commodi eius excepturi, libero necessitatibus
                  enim voluptatibus.
                </p>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="text-center">
                <Link to="/features">See all features &rarr;</Link>
              </Col>
            </Row>
          </Container>

          <Jumbotron className="bg-info mb-0">
            <Container className="py-5">
              <Row>
                <Col md="6" className="mx-auto">
                  <h2 class="text-center">
                    BUILD YOUR OWN ONLINE PORTFOLIO WEBSITE
                  </h2>
                  <Button
                    variant="secondary"
                    block
                    onClick={this.toRegistration}
                  >
                    Create your portfolio
                  </Button>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </main>
      </React.Fragment>
    );
  }
}

export default withRouter(HomePage);
