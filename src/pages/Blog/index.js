import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SubstackFeed from "./SubstackFeed";

const BlogList = () => {
  return (
    <>
      <Container className="bg-3 mb-70">
        <Row>
          <Col>
            <label className="heading-label mb-4">Artigos Financeiros</label>
            <h2 className="heading">📝 Posts em Destaque</h2>
            <p>
              Partilha de informação relevante para a tua educação financeira.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="bg-4 mb-70">
        <Row>
          <SubstackFeed />
        </Row>
      </Container>
    </>
  );
};

export default BlogList;
