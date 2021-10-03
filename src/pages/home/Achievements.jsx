import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

export default function Achievements() {
  return (
    <Col md="12" className="text-center py-5">
      <Container>
        <h3 className="mb-5">Our Achievenets</h3>
        <Row className="justify-content-center">
          <Col xs="6" md="3" className="mb-3 mx-auto">
            <CircularProgressbarWithChildren value={85}>
              <h2>50,452</h2>
              <h5 className="text-muted">Couple Match</h5>
            </CircularProgressbarWithChildren>
          </Col>
          <Col xs="6" md="3" className="mb-3 mx-auto">
            <CircularProgressbarWithChildren value={94}>
              <h2>67,231</h2>
              <h5 className="text-muted">Happy Clients</h5>
            </CircularProgressbarWithChildren>
          </Col>
          <Col xs="6" md="3" className="mb-3 mx-auto">
            <CircularProgressbarWithChildren value={90}>
              <h2>1,000 +</h2>
              <h5 className="text-muted">Daily Match</h5>
            </CircularProgressbarWithChildren>
          </Col>
        </Row>
      </Container>
    </Col>
  );
}
