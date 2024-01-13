import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Products = () => {
  return (
    <main>
      <Container className="py-100">
        <Row>
          <Col md={5}>
            <h2>Produtos</h2>
            <p>...Brevemente✨</p>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Products;
