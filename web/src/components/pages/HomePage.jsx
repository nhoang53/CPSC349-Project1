import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Container, Row, Col, Button, Jumbotron } from "react-bootstrap";
import BackGround from 'components/images/background2.gif'
import Free from 'components/images/free.jpg'
import Domain from 'components/images/domain.jpg'
import LinkShare from 'components/images/linkShare.jpg'
import ProductContent from 'components/images/productContent5.jpg'



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
          <img src={BackGround} />
            <Row className="py-5">
              <Col md="6">
                <h2 className="text-light">Show the world what you can do.</h2>
                <div className="mb-4">
                  Create a page to show off your projects.
                </div>
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
                <h3 className="text-center">Free To Use</h3>
                <p>
                  Make it easy for your audience to take action on what is most important to you.
                </p>
                <img src={Free} />
              </Col>
              <Col md="4">
                <h3 className="text-center">Professional Domain</h3>
                <p>
                  Add a secure, custon domain to your page. Or, map one you already own.
                </p>
                  <img src={Domain} />
              </Col>
              <Col md="4">
                <h3 className="text-center">One Link To Share</h3>
                <p>
                  Use your link everywhere, online and offline, to promote yourself.
                </p>
                <img src={LinkShare} />
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
                  <img src={ProductContent} />
                  <h2 className="text-center">
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
