import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mentemilionaria from "../../assets/books/wook-livro-mente-milionaria.webp";

const Books = () => {
  return (
    <main>
      <Container className="py-100">
        <Row>
          <Col md={6}>
            <img
              src={mentemilionaria}
              alt="Livro Segredos da mente milionaria"
            />
          </Col>
          <Col md={6}>
            <h2>Segredos da Mente Milionária</h2>
            <h3>de T. Harv Eker</h3>
            <p>
              Aprenda a vencer transformando os seus conceitos sobre o dinheiro
              e adotando os hábitos das pessoas bem-sucedidas.
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Books;
