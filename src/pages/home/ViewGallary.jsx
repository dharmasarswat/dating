import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Gallery from "react-grid-gallery";

const images = [
  {
    src: "https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80",
    caption: "8H (gratisography.com)",
  },
  {
    src: "https://images.unsplash.com/photo-1529408570047-e4414fb17e95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1294&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1529408570047-e4414fb17e95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1294&q=80",
    caption: "8H (gratisography.com)",
  },
  {
    src: "https://images.unsplash.com/photo-1498746607408-1e56960e3bdd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1498746607408-1e56960e3bdd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    caption: "286H (gratisography.com)",
  },
  {
    src: "https://images.unsplash.com/photo-1551024739-78e9d60c45ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1551024739-78e9d60c45ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    caption: "315H (gratisography.com)",
  },
  {
    src: "https://images.unsplash.com/photo-1500336624523-d727130c3328?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1500336624523-d727130c3328?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    caption: "201H (gratisography.com)",
  },
  {
    src: "https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    caption: "Big Ben (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    caption: "Wood Glass (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80",
    caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80",
    caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://images.unsplash.com/photo-1455637350775-730a9e5a8310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1455637350775-730a9e5a8310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    caption: "Wood Glass (Tom Eversley - isorepublic.com)",
  },
];

export default function ViewGallary() {
  return (
    <Col md="12" className="text-center py-5 bg-light">
      <Container>
        <h3 className="mb-5">Our Gallary</h3>
        <Row className="justify-content-center">
          <Col xs={12}>
            <Gallery images={images} enableImageSelection={false} backdropClosesModal />
          </Col>
        </Row>
      </Container>
    </Col>
  );
}
