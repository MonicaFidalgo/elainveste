import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container className="footer">
      <Row>
        <label className="heading-label mb-4">Junta-te a mim</label>
        <h2 className="heading"> 💬 Fica a par de toda a informação</h2>
        <Col lg="4">
          <a
            href="mailto:elainveste.tuinvestes@gmail.com"
            className="footer-mail-link"
            rel="noreferrer"
          >
            <h3>elainveste.tuinvestes@gmail.com</h3>
          </a>
        </Col>
      </Row>
      <Row className="mt-5">
        <p>Segue-me nas redes sociais</p>
        <Col lg="4" className="footer-icons">
          <a
            href="https://www.linkedin.com/company/elainveste/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.instagram.com/elainveste.pt/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </Col>
      </Row>
      <Row>
        <Col className="footer-copywright">
          <p>Developed by Mónica Fidalgo</p>
          <p>Copyright © {year} Ela Investe</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
