import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../../assets/she-invests.svg";
import monica from "../../assets/monica-fidalgo.png";
import inflation from "../../assets/inflation.svg";
import planning from "../../assets/calendar.svg";
import invest from "../../assets/income.svg";
import calculadorafire from "../../assets/elainveste-firenumber.png";
import orçamentomensal from "../../assets/el-investe-orcamento-mensal.png";

const Home = () => {
  return (
    <main>
      <div className="bg-1">
        <Container className="py-100">
          <Row>
            <Col md={5}>
              <h1 className="title mb-3">Ela Investe</h1>
              <h2>Conquista a liberdade financeira com dicas valiosas</h2>
              <p>
                Aprende a investir de forma inteligente e alcança a tão sonhada
                independência financeira. Descobre as ferramentas e recursos que
                te vão ajudar a organizar tuas finanças e alcançar os teus
                objetivos.
              </p>
            </Col>
            <Col md={7}>
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
                <div className="icon-wrapper">
                  <img src={inflation} alt="inflação" />
                </div>
                <h4>Para reduzir o impacto da inflação</h4>
                <p>
                  Dados históricos mostram que diversos investimentos tendem a
                  crescer mais rápido do que a inflação. O poder de compra do
                  dinheiro em contas bancárias é progressivamente reduzido pela
                  inflação, geralmente superior às taxas de juros de contas
                  poupança.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <div className="icon-wrapper">
                  <img src={planning} alt="planeamento" />
                </div>
                <h4>Planeamento financeiro e reforma</h4>
                <p>
                  Investir é uma ferramenta valiosa no planejamento financeiro
                  futuro. Estudos indicam adotar uma estratégia de investimento
                  a longo prazo, é possível lidar de maneira mais eficaz com as
                  flutuações e instabilidades momentâneas que ocorrem no mercado
                  financeiro a curto prazo.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <div className="icon-wrapper">
                  <img src={invest} alt="investir" />
                </div>
                <h4>Criar uma renda passiva</h4>
                <p>
                  Alguns tipos de investimentos geram retornos regulares, como
                  dividendos de ações. Os investidores podem optar por
                  reinvestir esses ganhos ou utilizá-los para complementar seu
                  estilo de vida atual.
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
        </Row>
      </Container>
      <div className="bg-3">
        <Container className="py-100 text-center">
          <Row>
            <Col>
              <h2 className="heading">
                "As pessoas não decidem o seu futuro, decidem os seus hábitos, e
                os seus hábitos decidem o seu futuro."
              </h2>
              <blockquote>― F. M. Alexander</blockquote>
              {/* <p>
                A liberdade financeira significa coisas diferentes para pessoas
                diferentes. Alguns planeiam alcançar um conforto financeiro
                suficiente para lidar com emergências de curto prazo ou para
                satisfazer metas de estilo de vida, enquanto outros sonham com a
                reforma antecipada e um futuro sem complicações. Com um
                planeamento cuidadoso, é possível encontrar uma resposta para a
                pergunta: como alcançar a independência financeira?
              </p>
              <p>
                O <span className="highlighted">movimento FIRE</span> (Financial
                Independence, Retire Early) é um movimento que busca atingir a
                independência financeira e reforma antecipada. O objetivo do
                FIRE é acumular ativos financeiros suficientes para ter a opção
                de se aposentar muito antes da idade convencional de
                aposentadoria.
              </p>
              <p>
                O <span className="highlighted">valor FIRE</span> refere-se ao
                valor de ativos financeiros necessário para alcançar a
                independência financeira. Este valor é calculado com base nas
                despesas anuais da pessoa, na taxa de retorno esperada dos
                investimentos e na taxa de inflação.
              </p>
              <a href="/" className="button button-primary">
                Como calculo o meu FIRE?
              </a> */}
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="py-100">
        {" "}
        <Row>
          <h2 className="heading heading-primary">Ofertas para ti</h2>
          <Col md={4} className="offset-md-2">
            <div className="card">
              <img
                className="card-img-top"
                src={calculadorafire}
                alt="Produto 
                Calculadora Fire Ela Investe"
              />
              <div className="card-body">
                <p className="card-text">
                  Calcula o teu FIRE number e o valor que tens de investir para
                  alcançares a tua liberdade financeira
                </p>
                <a
                  class="button button-secondary"
                  href="https://elainveste.gumroad.com/l/calculadora-fire"
                  target="_blank"
                >
                  Eu quero
                </a>
              </div>
            </div>
          </Col>
          <Col md={4}>
            {" "}
            <div className="card">
              <img
                className="card-img-top"
                src={orçamentomensal}
                alt="Produto 
                Orçamento Mensal Ela Investe"
              />
              <div className="card-body">
                <p className="card-text">
                  Planeia as tuas contas e vê como podes poupar com o Orçamento
                  Mensal
                </p>
                <a
                  href="https://elainveste.gumroad.com/l/orcamento-mensal"
                  class="button button-secondary"
                  target="_blank"
                >
                  Eu quero
                </a>
              </div>
            </div>
          </Col>
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
