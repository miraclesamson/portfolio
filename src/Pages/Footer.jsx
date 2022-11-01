import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container
      fluid
      className="bg-zinc-900 bottom-0 py-3 text-white flex text-center
    items-center justify-center"
    >
      <Row>
        <Col md="5">
          <h3>Designed and Developed by Miracle Samson</h3>
        </Col>
        <Col md="5" className="footer-copywright text-center">
          <h3>Copyright © {year} </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
