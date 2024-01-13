import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../../assets/she-invests.svg";
import monica from "../../assets/monica-fidalgo.png";
import inflation from "../../assets/inflation.svg";
import planning from "../../assets/calendar.svg";
import invest from "../../assets/income.svg";

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
              <img src={image} alt="Foguetão" width="100%" />
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
            </Col>
          </Row>
          <Row className="mt-5">
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
              Olá, eu sou a Mónica! Tenho 35 anos e comecei a investir há 3
              anos. Tenho o sonho de alcançar a liberdade financeira para me
              poder reformar mais cedo.
            </p>
            <p>
              Quando comecei a investir, senti que ainda havia e há pouca
              informação sobre como investir em Portugal e qual a melhor
              estratégia.
            </p>
            <p>
              O meu objetivo é capacitar as pessoas a começar a investir e a
              entender mais sobre o assunto. Junta-te a mim nesta jornada e
              comece a investir na tua independência financeira!
            </p>
          </Col>
        </Row>
      </Container>
      <div className="bg-3">
        <Container className="py-100">
          {" "}
          <Row>
            <Col>
              <h2 className="heading heading-secondary">
                O caminho para a liberdade financeira
              </h2>
              <p>
                A liberdade financeira significa coisas diferentes para pessoas
                diferentes. Alguns planeiam alcançar um conforto financeiro
                suficiente para lidar com emergências de curto prazo ou para
                satisfazer metas de estilo de vida, enquanto outros sonham com a
                reforma antecipada e um futuro sem complicações. Com um
                planeamento cuidadoso, é possível encontrar uma resposta para a
                pergunta: como alcançar a independência financeira?
              </p>
              <p>
                O FIRE (Financial Independence, Retire Early) é um movimento que
                busca atingir a independência financeira e reforma antecipada. O
                objetivo do FIRE é acumular ativos financeiros suficientes para
                ter a opção de se aposentar muito antes da idade convencional de
                aposentadoria.
              </p>
              <a href="/" className="button button-primary">
                Como calculo o meu FIRE?
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="py-100">
        {" "}
        <Row>
          <h2 className="heading heading-primary">Produtos para ti</h2>
          <p>... Brevemente✨</p>
          {/* <Col>
            <div className="card">
              <img className="card-img-top" src="..." alt="Card  cap" />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a class="button button-secondary" href="/products">
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
                <a href="/products" class="button button-secondary">
                  {" "}
                  View Project{" "}
                </a>
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>
      {/* 
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
      </div> */}
    </main>
  );
};

export default Home;
