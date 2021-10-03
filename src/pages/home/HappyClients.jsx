import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-img-carousel";
import "react-img-carousel/lib/carousel.css";

export default function HappyClients() {
  return (
    <div className="my-4 pb-5">
      <Container className="text-center pt-5">
        <h3 className="mb-5">Our Happy Clients</h3>
      </Container>
      <Carousel
        cellPadding={5}
        arrows={false}
        infinite
        autoplay
        autoplaySpeed={1000}
        pauseOnHover
      >
        <img src="https://images.unsplash.com/photo-1514432433435-ce2c7903dfba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" />
        <img src="https://images.unsplash.com/photo-1469989011449-f7b46079781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" />
        <img src="https://images.unsplash.com/photo-1541089404510-5c9a779841fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <img src="https://images.unsplash.com/photo-1555516573-f60567b82fed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" />
      </Carousel>
    </div>
  );
}
