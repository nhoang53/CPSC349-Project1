import React, { Component } from "react";
import { Container, Row, Col, Nav, Tab, Badge, Button } from "react-bootstrap";

export default class FeaturesPage extends Component {
  toPricing = () => {
    this.props.history.push("/pricing");
  };

  render() {
    return (
      <main role="main">
        <Container className="text-center my-5">
          <h1>Features</h1>
          <Tab.Container id="features" defaultActiveKey="first">
            <Row className="my-5 border border-info">
              <Col sm="4" className="px-0">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item className="m-0">
                    <Nav.Link
                      eventKey="first"
                      className="d-flex justify-content-between"
                    >
                      Simple
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="m-0">
                    <Nav.Link
                      eventKey="second"
                      className="d-flex justify-content-between"
                    >
                      Professional
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="m-0">
                    <Nav.Link
                      eventKey="third"
                      className="d-flex justify-content-between"
                    >
                      One link to share
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="m-0">
                    <Nav.Link
                      eventKey="fourth"
                      className="d-flex justify-content-between"
                    >
                      Resume download
                      <Badge pill variant="warning">
                        Pro
                      </Badge>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="m-0">
                    <Nav.Link
                      eventKey="fifth"
                      className="d-flex justify-content-between"
                    >
                      Contact form
                      <Badge pill variant="warning">
                        Pro
                      </Badge>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm="8" className="bg-info text-light py-4">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <h4 className="text-light">Simple</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem provident est earum harum recusandae hic nemo, natus
                      illo, ut ad incidunt, deserunt laborum suscipit magni unde
                      aliquam. Dolore, soluta asperiores? Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Odit hic, illo eligendi
                      earum tempora repellendus nobis atque obcaecati blanditiis
                      unde labore sequi praesentium facere suscipit. Odit
                      numquam a tenetur atque. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Autem eaque unde molestias,
                      soluta sint magnam ratione natus, omnis voluptas eos, illo
                      cum? Corporis aliquid doloremque esse! Ullam
                      exercitationem accusamus dignissimos?
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <h4 className="text-light">Professional</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem provident est earum harum recusandae hic nemo, natus
                      illo, ut ad incidunt, deserunt laborum suscipit magni unde
                      aliquam. Dolore, soluta asperiores? Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Odit hic, illo eligendi
                      earum tempora repellendus nobis atque obcaecati blanditiis
                      unde labore sequi praesentium facere suscipit. Odit
                      numquam a tenetur atque. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Autem eaque unde molestias,
                      soluta sint magnam ratione natus, omnis voluptas eos, illo
                      cum? Corporis aliquid doloremque esse! Ullam
                      exercitationem accusamus dignissimos?
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <h4 className="text-light">One link to share</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem provident est earum harum recusandae hic nemo, natus
                      illo, ut ad incidunt, deserunt laborum suscipit magni unde
                      aliquam. Dolore, soluta asperiores? Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Odit hic, illo eligendi
                      earum tempora repellendus nobis atque obcaecati blanditiis
                      unde labore sequi praesentium facere suscipit. Odit
                      numquam a tenetur atque. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Autem eaque unde molestias,
                      soluta sint magnam ratione natus, omnis voluptas eos, illo
                      cum? Corporis aliquid doloremque esse! Ullam
                      exercitationem accusamus dignissimos?
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <h4 className="text-light">Resume download</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem provident est earum harum recusandae hic nemo, natus
                      illo, ut ad incidunt, deserunt laborum suscipit magni unde
                      aliquam. Dolore, soluta asperiores? Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Odit hic, illo eligendi
                      earum tempora repellendus nobis atque obcaecati blanditiis
                      unde labore sequi praesentium facere suscipit. Odit
                      numquam a tenetur atque. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Autem eaque unde molestias,
                      soluta sint magnam ratione natus, omnis voluptas eos, illo
                      cum? Corporis aliquid doloremque esse! Ullam
                      exercitationem accusamus dignissimos?
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <h4 className="text-light">Contact form</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem provident est earum harum recusandae hic nemo, natus
                      illo, ut ad incidunt, deserunt laborum suscipit magni unde
                      aliquam. Dolore, soluta asperiores? Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Odit hic, illo eligendi
                      earum tempora repellendus nobis atque obcaecati blanditiis
                      unde labore sequi praesentium facere suscipit. Odit
                      numquam a tenetur atque. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Autem eaque unde molestias,
                      soluta sint magnam ratione natus, omnis voluptas eos, illo
                      cum? Corporis aliquid doloremque esse! Ullam
                      exercitationem accusamus dignissimos?
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
          <Row className="my-5 py-5">
            <Col>
              <h3>Ready to unlock more features?</h3>
              <Button variant="info" onClick={this.toPricing}>
                Compare Plans
              </Button>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}
