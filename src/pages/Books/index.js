import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookSuggestion from "../../components/BookSuggestion";
import StarRating from "../../components/StarRating";
import mentemilionaria from "../../assets/books/wook-livro-mente-milionaria.webp";
import indepedenciafinanceira from "../../assets/books/wook-livro-independencia-financeira.webp";
import dinheiroouavida from "../../assets/books/wook-livro-o-dinheiro-ou-a-vida.webp";

const Books = () => {
  return (
    <main className="books">
      <div>
        <Container className="py-100">
          <Row className="text-center">
            <h2 className="heading ">O que estou a adorar ler</h2>
          </Row>
          <Row>
            <Col lg={8} className="offset-lg-2">
              <div className="book-favorite">
                <div>
                  <img
                    src={mentemilionaria}
                    alt="Livro Segredos da mente milionaria"
                  />
                </div>

                <div className="book-favorite-content">
                  <h3 className="pt-4">Segredos da Mente Milionária</h3>
                  <h4>de T. Harv Eker</h4>
                  <StarRating rating={5} />
                  <p className="mt-2">
                    Aprenda a vencer transformando os seus conceitos sobre o
                    dinheiro e adotando os hábitos das pessoas bem-sucedidas.
                  </p>
                  <a
                    className="button button-secondary"
                    href="https://www.wook.pt/livro/segredos-da-mente-milionaria-t-harv-eker/15767734?a_aid=659ad6746d1c7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Encomendar
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="py-100">
        <Row className="text-center">
          <h2 className="heading ">Livros que vão mudar a tua vida</h2>
        </Row>
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
