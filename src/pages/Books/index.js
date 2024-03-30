import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookSuggestion from "../../components/BookSuggestion";
import StarRating from "../../components/StarRating";
import mentemilionaria from "../../assets/books/wook-livro-mente-milionaria.webp";
import indepedenciafinanceira from "../../assets/books/livro-independencia-financeira-wook.png";
import dinheiroouavida from "../../assets/books/livro-dinheiro-ou-vida-wook.png";

const Books = () => {
  return (
    <main className="books">
      <div>
        <Container className="bg-3 mb-70">
          <Row>
            <Col>
              <label className="heading-label mb-4">
                Descobertas Literárias
              </label>
              <h2 className="heading">
                📚 Livros para impulsionar os teus investimentos.
              </h2>
              <p>
                Os livros que revolucionaram a minha compreensão dos
                investimentos e sucesso financeiro, e estão prontos para
                revolucionar a tua também.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="bg-2 mb-70">
          <Row>
            <Col lg={4}>
              <img
                src={mentemilionaria}
                alt="Livro Segredos da mente milionaria"
                width="100%"
              />
            </Col>
            <Col lg={8}>
              <label className="heading-label mb-4">
                O que estou a adorar ler
              </label>
              <h2 className="heading-secondary">
                Segredos da Mente Milionária
              </h2>
              <div className="book-favorite">
                <div className="book-favorite-content">
                  <h4>de T. Harv Eker</h4>
                  <StarRating rating={5} />
                  <p className="mt-2">
                    Em 'Segredos da Mente Milionária', T. Harv Eker mergulha na
                    psicologia da riqueza, destacando a importância da
                    mentalidade para o sucesso financeiro. O livro oferece
                    insights valiosos sobre como superar crenças limitantes e
                    adoptar hábitos prósperos para alcançar a independência
                    financeira.
                    <br></br> <br></br> Uma leitura essencial para aqueles que
                    desejam transformar as suas vidas financeiras e alcançar o
                    sucesso duradouro.
                  </p>
                  <a
                    className="button button-primary"
                    href="https://www.wook.pt/livro/segredos-da-mente-milionaria-t-harv-eker/15767734?a_aid=659ad6746d1c7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Quero comprar este livro
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="bg-4 mb-70">
        <label className="heading-label mb-4">
          Livros que vão mudar a tua vida
        </label>
        <h2 className="heading-secondary mb-5">
          💰 Leituras Financeiras: Recomendações para impulsionar os teus
          Investimentos.
        </h2>
        <Row>
          <Col lg={5} className="offset-lg-1">
            <BookSuggestion
              title="O Caminho Simples para a Independência Financeira"
              subtitle="JL Collins"
              description="Aprenda a investir os seus recursos com propósito e confiança."
              image={indepedenciafinanceira}
              alt="Livro O Caminho Simples para a Independência Financeira"
              url="https://www.wook.pt/livro/o-caminho-simples-para-a-independencia-financeira-jl-collins/27406292?a_aid=659ad6746d1c7"
              rating={5}
            />
          </Col>
          <Col lg={5}>
            <BookSuggestion
              title="O Dinheiro ou a Vida"
              subtitle="Vicki Robin e Joe Dominguez"
              description="9 passos para transformar a sua relação com o dinheiro e atingir a independência financeira"
              image={dinheiroouavida}
              url="https://www.wook.pt/livro/o-dinheiro-ou-a-vida-vicki-robin/24104272?a_aid=659ad6746d1c7"
              rating={5}
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Books;
