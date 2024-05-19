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
        <iframe
          title="ela investe substack"
          src="https://elainveste.substack.com/embed"
          width="480"
          height="320"
          frameborder="0"
        ></iframe>
      </Row>
      <Row className="mt-4">
        <h3>Segue-me nas redes sociais</h3>
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
          <p>
            <a
              href="mailto:elainveste.tuinvestes@gmail.com"
              className="footer-mail-link"
              rel="noreferrer"
            >
              <i className="fa fa-envelope"></i>
              <span>elainveste.tuinvestes@gmail.com</span>
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
