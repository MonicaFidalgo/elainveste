import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../../assets/invest-woman.svg";

const Home = () => {
  return (
    <main>
      <div className="gradient">
        <Container className="content">
          <Row>
            <Col md={6}>
              <h1 className="mb-3">Ela Investe</h1>
              <ul>
                <li>
                  ✨ Inspiração para alcançares a tua liberdade financeira{" "}
                </li>
                <li>🔥 A empoderar mulheres diariamente </li>
                <li>🚀 Começa a tua jornada de investimentos</li>
              </ul>
            </Col>

            <Col md={6}>
              <img src={image} alt="" />
              {/* https://storyset.com/*/}
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default Home;
