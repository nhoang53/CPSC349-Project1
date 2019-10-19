import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default class UserPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid className="bg-info text-light p-0 m-0 min-vh-100">
          <Row className="p-0 m-0">
            <Col md="8" className="p-0 m-0">
              <Image
                src="https://via.placeholder.com/150"
                className="w-100 max-vh-30 vh-md-100 sticky-top"
              />
            </Col>
            <Col className="py-4">
              <Row>
                <Col>
                  <h1 className="text-center text-light">Full Name</h1>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs="3">
                  <Image src="https://via.placeholder.com/150" fluid />
                </Col>
                <Col xs="3">
                  <Image src="https://via.placeholder.com/150" fluid />
                </Col>
                <Col xs="3">
                  <Image src="https://via.placeholder.com/150" fluid />
                </Col>
                <Col xs="3">
                  <Image src="https://via.placeholder.com/150" fluid />
                </Col>
              </Row>
              <Row>
                <Col>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Perspiciatis iusto aliquam minima amet est obcaecati beatae
                  hic nesciunt, dolorem vel aperiam laudantium sunt nobis
                  labore? Natus rem ratione assumenda facere!Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Perspiciatis iusto
                  aliquam minima amet est obcaecati beatae hic nesciunt, dolorem
                  vel aperiam laudantium sunt nobis labore? Natus rem ratione
                  assumenda facere!Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Perspiciatis iusto aliquam minima amet est
                  obcaecati beatae hic nesciunt, dolorem vel aperiam laudantium
                  sunt nobis labore? Natus rem ratione assumenda facere!Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit.
                  Perspiciatis iusto aliquam minima amet est obcaecati beatae
                  hic nesciunt, dolorem vel aperiam laudantium sunt nobis
                  labore? Natus rem ratione assumenda facere!Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Perspiciatis iusto
                  aliquam minima amet est obcaecati beatae hic nesciunt, dolorem
                  vel aperiam laudantium sunt nobis labore? Natus rem ratione
                  assumenda facere!Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Perspiciatis iusto aliquam minima amet est
                  obcaecati beatae hic nesciunt, dolorem vel aperiam laudantium
                  sunt nobis labore? Natus rem ratione assumenda facere!Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit.
                  Perspiciatis iusto aliquam minima amet est obcaecati beatae
                  hic nesciunt, dolorem vel aperiam laudantium sunt nobis
                  labore? Natus rem ratione assumenda facere!Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Perspiciatis iusto
                  aliquam minima amet est obcaecati beatae hic nesciunt, dolorem
                  vel aperiam laudantium sunt nobis labore? Natus rem ratione
                  assumenda facere!Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Perspiciatis iusto aliquam minima amet est
                  obcaecati beatae hic nesciunt, dolorem vel aperiam laudantium
                  sunt nobis labore? Natus rem ratione assumenda facere!Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit.
                  Perspiciatis iusto aliquam minima amet est obcaecati beatae
                  hic nesciunt, dolorem vel aperiam laudantium sunt nobis
                  labore? Natus rem ratione assumenda facere!Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Perspiciatis iusto
                  aliquam minima amet est obcaecati beatae hic nesciunt, dolorem
                  vel aperiam laudantium sunt nobis labore? Natus rem ratione
                  assumenda facere!
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
