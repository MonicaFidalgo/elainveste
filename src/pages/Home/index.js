import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import monica from "../../assets/about-me.svg";
import elainveste from "../../assets/ela-investe-hero.svg";
import inflation from "../../assets/inflation.svg";
import planning from "../../assets/financingplan.svg";
import invest from "../../assets/income.svg";
import calculadorafire from "../../assets/imagem-produto.png";
import orçamentomensal from "../../assets/produto-despesas-mensais.png";

const Home = () => {
  return (
    <main>
      <Container className="bg-3 mb-70">
        <Row>
          <Col lg={6}>
            <label className="heading-label mb-4">
              Descobre o poder dos investimentos
            </label>
            <h1 className="banner-title mb-3">
              🌱 Conquista a Liberdade Financeira
            </h1>
            <h2 className="banner-subtitle">
              Aprende a investir de forma inteligente e alcança a tão sonhada
              independência financeira. Descobre as ferramentas e recursos que
              te vão ajudar a organizar tuas finanças e alcançar os teus
              objetivos.
            </h2>
          </Col>
          <Col lg={6}>
            <img src={elainveste} alt="planeamento" width="100%" />
          </Col>
        </Row>
      </Container>
      <Container className="bg-2 mb-70">
        <Row>
          <label className="heading-label mb-4">Quem sou eu</label>
          <h2 className="heading">👩🏽‍💻 Conhece a minha história.</h2>
          <Col lg={6}>
            <p>
              Olá, eu sou a Mónica! Tenho 35 anos e comecei a investir há 3
              anos. Tenho o sonho de alcançar a liberdade financeira para me
              poder reformar mais cedo.
            </p>
            <p>
              Quando comecei a investir, senti que ainda havia e existe pouca
              informação sobre como investir em Portugal e qual a melhor
              estratégia.
            </p>
            <p>
              O meu objetivo é capacitar-te para a começares a investir e a
              entender mais sobre o assunto. Junta-te a mim nesta jornada e
              começa a investir em ti na tua independência financeira!
            </p>
          </Col>
          <Col lg={6} className="text-center mb-4">
            <img src={monica} alt="Mónica Fidalgo" width="100%" />
            {/* https://storyset.com/*/}
          </Col>
        </Row>
      </Container>

      <Container className="bg-4 mb-70">
        <Row>
          <Col>
            <label className="heading-label mb-4">
              Empoderamento financeiro
            </label>
            <h2 className="heading ">
              💡 Porque é que deves começar a investir?
            </h2>
          </Col>
        </Row>
        <Row className="align-items-center mt-5">
          <Col lg={6}>
            <div>
              <div className="icon-wrapper">
                <img src={inflation} alt="inflação" />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <h4 className="heading-secondary">
              Para reduzir o impacto da inflação
            </h4>
            <p>
              Dados históricos mostram que diversos investimentos tendem a
              crescer mais rápido do que a inflação. O poder de compra do
              dinheiro em contas bancárias é progressivamente reduzido pela
              inflação, geralmente superior às taxas de juros de contas
              poupança.
            </p>
          </Col>
        </Row>
        <Row className="align-items-center mt-5">
          <Col lg={6}>
            <div className="icon-wrapper">
              <img src={planning} alt="planeamento" />
            </div>
          </Col>
          <Col lg={6} className="order-lg-first">
            <div>
              <h4 className="heading-secondary">
                Planeamento financeiro e reforma
              </h4>
              <p>
                Investir é uma ferramenta valiosa no planejamento financeiro
                futuro. Estudos indicam adotar uma estratégia de investimento a
                longo prazo, é possível lidar de maneira mais eficaz com as
                flutuações e instabilidades momentâneas que ocorrem no mercado
                financeiro a curto prazo.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center mt-5">
          <Col lg={6}>
            <div>
              <div className="icon-wrapper">
                <img src={invest} alt="investir" />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <h4 className="heading-secondary">Criar uma renda passiva</h4>
            <p>
              Alguns tipos de investimentos geram retornos regulares, como
              dividendos de ações. Os investidores podem optar por reinvestir
              esses ganhos ou utilizá-los para complementar seu estilo de vida
              atual.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="bg-3 mb-70">
        <Row>
          <label className="heading-label mb-4">Ofertas para ti</label>
          <h2 className="heading">💰 Inicia a tua Jornada de Investimentos</h2>
          <Col lg={6}>
            <div className="card">
              <div className="card-img card-img-1">
                <img
                  className="card-img-top"
                  src={calculadorafire}
                  alt="Produto 
                Calculadora Fire Ela Investe"
                />
              </div>
              <div className="card-body">
                <h4 className="heading-secondary">Calculadora do FIRE</h4>
                <p className="card-text">
                  Calcula o teu FIRE number e o valor que tens de investir para
                  alcançares a tua liberdade financeira
                </p>
                <a
                  className="button button-primary"
                  href="https://elainveste.gumroad.com/l/calculadora-fire"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Grátis
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            {" "}
            <div className="card">
              <div className="card-img card-img-2">
                <img
                  className="card-img-top"
                  src={orçamentomensal}
                  alt="Produto 
                Orçamento Mensal Ela Investe"
                />
              </div>
              <div className="card-body">
                <h4 className="heading-secondary">
                  Planner de Despesas Manuais
                </h4>
                <p className="card-text">
                  Planeia as tuas contas e vê como podes poupar com o Orçamento
                  Mensal
                </p>
                <a
                  href="https://elainveste.gumroad.com/l/orcamento-mensal"
                  className="button button-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Grátis
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* <Container className="bg-3">
        <Row>
          <label className="heading-label mb-4">Recursos premium</label>
          <h2 className="heading">
            💰 Desbloqueia o teu Potencial Financeiro!
          </h2>
          <Col>
            <div className="card-buy">
              <h1>19.99</h1>
              <button>Buy Now</button>
            </div>
          </Col>
        </Row>
      </Container> */}

      <Container className="text-center quote-card mb-70">
        <Row>
          <Col md={10} className="offset-md-1">
            <div>
              <h3>
                "As pessoas não decidem o seu futuro, decidem os seus hábitos e
                os seus hábitos decidem o seu futuro."
              </h3>
              <blockquote>― F. M. Alexander</blockquote>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
