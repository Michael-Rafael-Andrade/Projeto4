import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import hist from "../../assets/parallax/bg.jpg";
import Header from "../../components/Layouts/Header.js";



function Historia() {

    return (
        <>
            <section className="about_section">
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }} className="text-center">
                            <h2 className="titulo_Sobre">Sobre a Tasty Burger</h2>
                            <p className="paragrafo_Sobre">
                                A hamburgueria Tasty Burger nasceu em um pequeno ponto de esquina, desacreditada por muitos.
                                No início, os recursos eram escassos e os clientes raros.
                                Os fundadores enfrentaram dificuldades financeiras e críticas constantes.
                                Muitos diziam que não havia espaço para mais uma hamburgueria na cidade.
                                Mas eles acreditavam na qualidade e no sabor único de seus hambúrgueres.
                                Com dedicação, passaram noites inteiras testando receitas artesanais.
                                A cada cliente conquistado, ganhavam confiança e motivação.
                                O boca a boca começou a espalhar a fama do sabor diferenciado.
                                Mesmo sem grandes investimentos, a paixão sustentava o negócio.
                                Com o tempo, filas começaram a se formar na porta.
                                A Tasty Burger virou ponto de encontro de jovens e famílias.
                                A marca cresceu e abriu novas unidades em diferentes bairros.
                                Hoje, é referência em inovação e qualidade no setor.
                                De desacreditada, tornou-se símbolo de perseverança e sucesso.
                                A história da Tasty Burger inspira empreendedores a nunca desistirem dos seus sonhos.
                            </p>
                            <Link to="/" className="btn_Sobre order_now btn_red">
                                Menu principal
                            </Link>
                            <p>
                                <img src={hist} alt="História da Tasty Burger" className="img_Sobre" />
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    );
}


export default Historia;