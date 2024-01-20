import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col lg="4" className="footer-copywright">
          <h3>Developed by Mónica Fidalgo</h3>
        </Col>
        <Col lg="4" className="footer-copywright">
          <h3>Copyright © {year} Mónica Fidalgo</h3>
        </Col>
        <Col lg="4">
          <a
            href="mailto:elainveste.tuinvestes@gmail.com"
            style={{ color: "white" }}
            className="footer-mail-link"
            rel="noreferrer"
          >
            <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
            <h3>elainveste.tuinvestes@gmail.com</h3>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
