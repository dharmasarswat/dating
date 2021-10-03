import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function WhyChooseUs() {
    return (
        <Col md="12" className="bg-light text-center py-5">
        <Container>
          <h3 className="mb-5">Why Choose Us</h3>
          <Row>
            <Col md="4" className="mb-3">
              <img src="/registration.png" className="w-25 h-auto my-4" height="100%" />
              <h4>Free Registration</h4>
              <p className="text-muted">Start today for FREE and meet your perfect match tonight!</p>
            </Col>
            <Col md="4" className="mb-3">
              <img src="/shield.png" className="w-25 h-auto my-4" height="100%" />
              <h4>Verified Profile</h4>
              <p className="text-muted">Verified profile is the key of any type of relationship</p>
            </Col>
            <Col md="4" className="mb-3">
              <img src="/user.png" className="w-25 h-auto my-4" height="100%" />
              <h4>Safe & Secure</h4>
              <p className="text-muted">We assure you that your privacy should be protect by us.</p>
            </Col>
          </Row>
        </Container>
      </Col>
    )
}
