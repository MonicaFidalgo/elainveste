import React from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { Container, Row, Col } from "react-bootstrap";
import articles from "../../data/articles.json";

export default function SinglePage() {
  const params = useParams();
  if (params.state) {
    const postURL = params.state;

    const article = articles.find((article) => {
      return article.postUrl === postURL;
    });

    return (
      <Container className="py-100">
        <Row>
          <Col>
            {article ? (
              <>
                <h2 className="heading">{article.title}</h2>
                <div>{parse(article.content)}</div>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
