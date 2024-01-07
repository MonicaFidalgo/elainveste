import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../../assets/rocketship.png";
import monica from "../../assets/monica-fidalgo.png";
import inflation from "../../assets/inflation-icon.png";
import planning from "../../assets/planning-icon.png";
import invest from "../../assets/invest-icon.png";

const Home = () => {
  return (
    <main>
      <div className="bg-1">
        <Container className="py-100">
          <Row>
            <Col md={6}>
              <h1 className="title mb-3">Ela Investe</h1>
              <h2>Conquista a liberdade financeira com dicas valiosas</h2>
              <p>
                Aprende a investir de forma inteligente e alcança a tão sonhada
                independência financeira. Descubre as ferramentas e recursos que
                vão te ajudar a organizar tuas finanças e alcançar os teus
                objetivos.
              </p>
            </Col>
            <Col md={6}>
              <img
                src={image}
                alt="Foguetão"
                width="100%"
                className="rounded-circle"
              />
              {/* https://storyset.com/*/}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-2">
        <Container className="py-100 ">
          {" "}
          <Row className="text-center">
            <Col>
              <h2 className="heading heading-primary ">
                Porque devo começar a investir?
              </h2>
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
          <Row className="pt-4 mt-5">
            <Col md={4}>
              <div>
                <img src={inflation} alt="inflação" />
                <h4>Para reduzir o impacto da inflação</h4>
                <p>
                  Dados históricos apontam para muitos investimentos que
                  aumentam de valor a uma taxa maior do que a inflação. O poder
                  de compra do dinheiro mantido em contas bancárias é erodido ao
                  longo do tempo pela taxa de inflação, que costuma ser mais
                  alta do que as taxas de juros de contas de poupança.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <img src={planning} alt="planeamento" />
                <h4>Planeamento financeiro e reforma</h4>
                <p>
                  Investir pode ajudar no planejamento do futuro, do ponto de
                  vista financeiro. Pesquisas sugerem que planos de investimento
                  a longo prazo têm o potencial de atingir suas metas porque
                  conseguem enfrentar a volatilidade de curto prazo do mercado.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <img src={invest} alt="investir" />
                <h4>Criar uma renda passiva</h4>
                <p>
                  Alguns tipos de investimentos geram retornos regulares, como
                  dividendos de ações. Indivíduos podem optar por reinvestir
                  esse fluxo de caixa ou usá-lo para complementar seu estilo de
                  vida atual.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="py-100 ">
        <Row>
          <h2 className="heading heading-primary text-center">Quem sou</h2>
          <Col md={6}>
            <img
              src={monica}
              alt="Mónica Fidalgo"
              width="100%"
              className="rounded-circle"
            />
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
        <Container className="py-100">
          {" "}
          <Row>
            <Col>
              <h2 className="heading heading-secondary"> Limited time offer</h2>
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
      <Container className="py-100">
        {" "}
        <Row>
          <h2 className="heading heading-primary">Produtos para ti</h2>
          <Col>
            <div className="card">
              <img className="card-img-top" src="..." alt="Card  cap" />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a class="button button-primary" href="/products">
                  {" "}
                  View Project{" "}
                </a>
              </div>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="card">
              <img className="card-img-top" src="..." alt="Card cap" />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/products" class="button button-primary">
                  {" "}
                  View Project{" "}
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="bg-3">
        <Container className="py-100 text-center">
          {" "}
          <Row>
            <Col>
              <h2 className="heading heading-secondary"> Limited time offer</h2>
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
