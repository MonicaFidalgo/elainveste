import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import data from "../../data/articles.json";

const BlogList = () => {
  return (
    <Container className="py-100">
      <Row>
        <h2 className="heading heading-primary">Posts em Destaque</h2>
        <Col>
          {data.map((post, index) => (
            <Link
              to={`/blog/${post.postUrl}`}
              key={index}
              className="blog-link"
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
  );
};

export default BlogList;
