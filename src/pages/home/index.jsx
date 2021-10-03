import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Achievements from "./Achievements";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Members from "./Members";
import ViewGallary from "./ViewGallary";
import WhyChooseUs from "./WhyChooseUs";
import Reviews from './Reviews';
import HappyClients from "./HappyClients";
import About from "./About";

export default function Home() {
  return (
    <div className="home-container">
      <Hero />
      <Col md={12} className="bg-primary text-center text-light h3 py-3 m-0">
        <img src="/phone.gif" height="100px" className="px-4" />
        Call Us +91 8171032322
      </Col>
      <Col md="12" className="bg-light text-center py-5">
        <Container>
          <h3 className="mb-4">Know About Us</h3>
          <h5 className="text-muted mb-4">
            Findmyfriendship.com is the India's Best Free Dating Site. Dating
            Girls is now easy. We provide Best Dating Service & 100% client
            satisfaction, we do what we promise. We are Free Dating Site that
            Help you to find Single Girls and Dating Women Near you and have fun
            with them. We help you to Find Friends Online. Online Dating
            Platform that surely help you find your partner. Find girls near you
            & Have fun. Earn Money and Get full enjoy. We provide best dating
            services all over India. Find Friends & Meet people online.
          </h5>
        </Container>
      </Col>
      <Members />
      <WhyChooseUs />
      <Achievements />
      <ViewGallary />
      <HowItWorks />
      <Reviews />
      <HappyClients />
      <About />
    </div>
  );
}
