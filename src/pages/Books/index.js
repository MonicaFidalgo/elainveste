import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookSuggestion from "../../components/BookSuggestion";
import StarRating from "../../components/StarRating";
import mentemilionaria from "../../assets/books/livro-segredos-mente-milionaria-wook.png";
import indepedenciafinanceira from "../../assets/books/livro-independencia-financeira-wook.png";
import dinheiroouavida from "../../assets/books/livro-dinheiro-ou-vida-wook.png";
import vidanaopodeesperar from "../../assets/books/livro-rita-piçarra-a-vida-nao-pode-esperar-wook.png";
import enriquecernabolsa from "../../assets/books/como-enriquecer-na-bolsa-com-warren-buffet-livro-wook.webp";

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
                src={enriquecernabolsa}
                alt="Livro Como Enriquecer na Bolsa com Warren Buffett"
                width="100%"
              />
            </Col>
            <Col lg={8}>
              <label className="heading-label mb-4">
                O que estou a adorar ler
              </label>
              <h2 className="heading-secondary">
                Como Enriquecer na Bolsa com Warren Buffett
              </h2>
              <div className="book-favorite">
                <div className="book-favorite-content">
                  <h4>de Mary Buffett e David Clark</h4>
                  <StarRating rating={5} />
                  <p className="mt-2">
                    Esta é a edição renovada do livro Como Enriquecer na Bolsa
                    com Warren Buffett, depois do sucesso das primeiras edições
                    deste livro em Portugal.
                    <br></br> <br></br> Traduzido em 12 países, esta obra
                    continua a ser uma ferramenta essencial para quem quer dar
                    os primeiros passos na área financeira. O seu conteúdo está
                    dividido em duas partes; a primeira será de iniciação "A
                    arte da Buffettologia básica", onde pode aprender alguns dos
                    segredos de Buffett e como reconhecer uma empresa onde deve
                    investir. Na segunda parte "Buffettologia Avançada", tem
                    acesso a outros instrumentos mais evoluídos nomeadamente
                    como determinar a taxa de rendibilidade anual esperada.
                  </p>
                  <a
                    className="button button-primary"
                    href="https://www.wook.pt/livro/como-enriquecer-na-bolsa-com-warren-buffett-mary-buffett/168146?a_aid=659ad6746d1c7"
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
              title="Segredos da Mente Milionária"
              subtitle="T. Harv Eker"
              description="Uma leitura essencial para aqueles que
              desejam transformar as suas vidas financeiras e alcançar o
              sucesso duradouro."
              image={mentemilionaria}
              alt="Segredos da Mente Milionária"
              url="https://www.wook.pt/livro/segredos-da-mente-milionaria-t-harv-eker/15767734?a_aid=659ad6746d1c7"
              rating={5}
            />
          </Col>
          <Col lg={5}>
            <BookSuggestion
              title="A Vida não Pode Esperar"
              subtitle="Rita Piçarra"
              description="Há sonhos possíveis de alcançar, o primeiro passo é saber como."
              image={vidanaopodeesperar}
              alt="Livro A Vida não Pode Esperar"
              url="https://www.wook.pt/livro/a-vida-nao-pode-esperar-rita-picarra/29618236?a_aid=659ad6746d1c7"
              rating={5}
            />
          </Col>
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
              alt="Livro O Dinheiro ou a Vida"
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
