import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function HowItWorks() {
  return (
    <Col md="12" className="text-center py-5">
      <Container>
        <h3 className="mb-5">How Its Work</h3>
        <Row className="justify-content-center">
          <Col md="4" className="mb-3">
            <img
              src="/fill-form.png"
              className="w-75 h-auto my-4"
              height="100%"
            />
            <h4>Fill Out Our Form</h4>
            <p className="text-muted">
              Fill all your detail required us to find out your perfect match.
              Fill it right so we can find it right
            </p>
          </Col>
          <Col md="4" className="mb-3">
            <img src="/match.png" className="w-75 h-auto my-4" height="100%" />
            <h4>We Find Your Match</h4>
            <p className="text-muted">
              From your given detail we find perfect match for you in your
              locality and help you to get in touch with your partner.
            </p>
          </Col>
          <Col md="4" className="mb-3">
            <img src="/date.png" className="w-75 h-auto my-4" height="100%" />
            <h4>We Fix Your Date</h4>
            <p className="text-muted">
              We help you to meet with your partner. No need to worry about
              anything, We set up all. Enjoy hassle free Dating with us.
            </p>
          </Col>
        </Row>
      </Container>
    </Col>
  );
}
