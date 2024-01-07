import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Mónica Fidalgo</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Mónica Fidalgo</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/MonicaFidalgo"
                style={{ color: "white" }}
              >
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/coding_mermaid"
                style={{ color: "white" }}
              >
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/monicafidalgo/"
                style={{ color: "white" }}
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.freecodecamp.org/news/author/monica/"
                style={{ color: "white" }}
              >
                <i class="fa fa-tiktok"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
