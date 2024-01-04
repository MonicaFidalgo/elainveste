import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../../assets/invest-woman.svg";

const Home = () => {
  return (
    <main>
      <div className="bg-1">
        <Container>
          <Row>
            <Col md={6}>
              <h1 className="mb-3">Ela Investe</h1>
              <h2>conquiste a liberdade financeira com dicas valiosas</h2>
              <p>
                Aprenda a investir de forma inteligente e alcance a tão sonhada
                independência financeira. Descubra as ferramentas e recursos que
                vão te ajudar a organizar suas finanças e alcançar seus
                objetivos.
              </p>
            </Col>
            <Col md={6}>
              <img src={image} alt="" />
              {/* https://storyset.com/*/}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-2">
        <Container>
          {" "}
          <Row>
            <Col>
              <h2> About the content</h2>
              <hr />
              <p>
                {" "}
                Com o Ela Investe, tenha acesso a dicas valiosas para investir
                de forma inteligente e conquistar a liberdade financeira.
                Aprenda a utilizar as ferramentas e recursos disponíveis, como
                ebooks e planilhas, para organizar suas finanças e alcançar seus
                objetivos. Comece hoje mesmo a trilhar seu caminho rumo à
                independência financeira.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <h2 className="mb-3">Conhece a cara por trás do projecto</h2>
          <Col md={6}>
            <img src={image} alt="" />
            {/* https://storyset.com/*/}
          </Col>
          <Col md={6}>
            <h2>Mónica Fidalgo</h2>
            <p>
              Monica Conheça Monica, uma investidora experiente que busca a
              liberdade financeira há 3 anos. Ela sabe que ainda há pouca
              informação sobre como investir em Portugal e qual a melhor
              estratégia. Seu objetivo é capacitar as pessoas a começar a
              investir e a conhecer mais sobre o assunto. Junte-se a ela e
              comece a investir em sua independência financeira!
            </p>
          </Col>
        </Row>
      </Container>
      <div className="bg-3">
        <Container>
          {" "}
          <Row>
            <Col>
              <h2> Limited time offer</h2>
              <p>
                {" "}
                Com o Ela Investe, tenha acesso a dicas valiosas para investir
                de forma inteligente e conquistar a liberdade financeira.
                Aprenda a utilizar as ferramentas e recursos disponíveis, como
                ebooks e planilhas, para organizar suas finanças e alcançar seus
                objetivos. Comece hoje mesmo a trilhar seu caminho rumo à
                independência financeira.
              </p>
              <button>Buy Now</button>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        {" "}
        <Row>
          <Col>
            <div className="card">
              <p>📈</p>
              <hr />
              <h4>Subtitulo</h4>
              <p>conteudo texto</p>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="card">
              <p>📈</p>
              <hr />
              <h4>Subtitulo</h4>
              <p>conteudo texto</p>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="bg-3">
        <Container>
          {" "}
          <Row>
            <Col>
              <h2> Limited time offer</h2>
              <div className="card-buy">
                <h1>19.99</h1>
                <button>Buy Now</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default Home;
