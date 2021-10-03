import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Register from '../../components/Register'

export default function Hero() {
    return (
        <div className="hero-container">
        <Container>
          <Row className="hero">
            <Col md="5" className="hero-text-container mt-4">
              <h2 className="hero-text text-light">Find your dating partner</h2>
              <h4 className="hero-sub-text my-4 text-light">
                Fill all your detail required us to find out your perfect match.
                Fill it right so we can find it right
              </h4>
            </Col>
            <Register />
          </Row>
        </Container>
      </div>
    )
}
