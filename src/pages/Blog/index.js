import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import data from "../../data/articles.json";

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
          <Col lg={8} className="mx-auto">
            {data.map((post, index) => (
              <Link
                to={`/blog/${post.postUrl}`}
                key={index}
                className="blog-link mb-3"
              >
                <div>
                  <h5>{post.title}</h5>
                  <p>{post.summary}</p>
                </div>
                <i class="fa-solid fa-up-right-from-square"></i>
              </Link>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogList;
