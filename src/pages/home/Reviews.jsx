import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-img-carousel";

import React from "react";

export default function Reviews() {
  return (
    <div className="bg-primary">
      <Container className="text-center pt-5">
        <h3 className="text-light">What People Says About Us</h3>
      </Container>
      <Carousel className="p-5 pt-0 m-0" arrows={false} infinite autoplay autoplaySpeed={2000} pauseOnHover slideWidth="100%">
        <Row>
          <Col md={4} lg={6} className="mx-auto">
            <img
              src="https://images.unsplash.com/photo-1501901609772-df0848060b33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              className="w-100 rounded mb-4"
            />
          </Col>
          <Col md={4} lg={6} className="text-center mx-auto text-light my-auto">
            <h1 className="mb-4 font-thin">Rohan & Soni</h1>
            <h4 className="font-thin">
              Main bhot khush hu kunki mjhe aap logo ki wajah se apurva se mila.
              Thank you
            </h4>
          </Col>
        </Row>

        <Row>
          <Col md={4} lg={6} className="mx-auto">
            <img
              src="https://images.unsplash.com/photo-1565284339181-bc86d2de3790?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
              className="w-100 rounded mb-4"
            />
          </Col>
          <Col md={4} lg={6} className="text-center mx-auto text-light my-auto">
            <h1 className="mb-4 font-thin">Aman & Archana</h1>
            <h4 className="font-thin">
              We first meet at love to friendship then we continue our journey
              together, Thank you Guys.
            </h4>
          </Col>
        </Row>

        <Row>
          <Col md={4} lg={6} className="mx-auto">
            <img
              src="https://images.unsplash.com/photo-1617788472008-1e524a74cf25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80"
              className="w-100 rounded mb-4"
            />
          </Col>
          <Col md={4} lg={6} className="text-center mx-auto text-light my-auto">
            <h1 className="mb-4 font-thin">Aman & Pari</h1>
            <h4 className="font-thin">
              After many years of struggling to find a perfect partner for me,
              finally i got her here
            </h4>
          </Col>
        </Row>
      </Carousel>
    </div>
  );
}
