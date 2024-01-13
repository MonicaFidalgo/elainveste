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
      <div className="bg-1">
        <Container className="py-100">
          <Row className="text-center">
            <h2 className="heading heading-primary">
              O que estou a adorar ler
            </h2>
          </Row>
          <Row className="book-favorite">
            <Col md={5} className="offset-md-1">
              <img
                src={mentemilionaria}
                alt="Livro Segredos da mente milionaria"
              />
            </Col>
            <Col md={5}>
              <h3 className="pt-4">Segredos da Mente Milionária</h3>
              <h4>de T. Harv Eker</h4>
              <StarRating rating={5} />
              <p className="mt-2">
                Aprenda a vencer transformando os seus conceitos sobre o
                dinheiro e adotando os hábitos das pessoas bem-sucedidas.
              </p>
              <a
                class="button button-secondary"
                href="https://www.wook.pt/livro/segredos-da-mente-milionaria-t-harv-eker/15767734"
                target="_blank"
              >
                Encomendar
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="py-100">
        <Row className="text-center">
          <h2 className="heading heading-primary">
            Livros que vão mudar a tua vida
          </h2>
        </Row>
        <Row>
          <Col md={5} className="offset-md-1">
            <BookSuggestion
              title="O Caminho Simples para a Independência Financeira"
              subtitle="JL Collins"
              description="Aprenda a investir os seus recursos com propósito e confiança."
              image={indepedenciafinanceira}
              alt="Livro O Caminho Simples para a Independência Financeira"
              url="https://www.wook.pt/livro/o-caminho-simples-para-a-independencia-financeira-jl-collins/27406292"
              rating={5}
            />
          </Col>
          <Col md={5}>
            <BookSuggestion
              title="O Dinheiro ou a Vida"
              subtitle="Vicki Robin e Joe Dominguez"
              description="9 passos para transformar a sua relação com o dinheiro e atingir a independência financeira"
              image={dinheiroouavida}
              url="https://www.wook.pt/livro/o-dinheiro-ou-a-vida-vicki-robin/24104272"
              rating={5}
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Books;
