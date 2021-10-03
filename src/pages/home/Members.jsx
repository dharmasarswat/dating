import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Members() {
  return (
    <Col md="12" className="bg-primary text-center py-5">
      <Container>
        <h3 className="text-light mb-5">Verified Members</h3>
        <Row>
          <Col xs={6} md="4" lg="3" className="mb-3">
            <img src="/g1.jpg" className="w-100" height="100%" />
          </Col>
          <Col xs={6} md="4" lg="3" className="mb-3">
            <img src="/g2.jpg" className="w-100" height="100%" />
          </Col>
          <Col xs={6} md="4" lg="3" className="mb-3">
            <img src="/g3.jpg" className="w-100" height="100%" />
          </Col>
          <Col xs={6} md="4" lg="3" className="mb-3">
            <img src="/g4.jpg" className="w-100" height="100%" />
          </Col>
        </Row>
      </Container>
    </Col>
  );
}
