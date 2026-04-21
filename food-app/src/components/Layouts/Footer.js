import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


function Footer() {

    const [isVisible, setIsVisible] = useState(false);

    function scrollTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    function listenToScroll() {
        let heightToHidden = 250;
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

        windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
    });

    return (
        <>

            <footer>
                <Container>
                    <Row>
                        <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                            <div className="text-center">
                                <h5>Localização</h5>
                                <p>Rua JK, nº 120</p>
                                <p>Centro, CEP 30900-000</p>
                                <p>Brasil</p>
                            </div>
                        </Col>
                        <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                            <div className="text-center">
                                <h5>Aberto às</h5>
                                <p>Segunda - Sexta: 09: 00AM - 10:00PM</p>
                                <p>Sábado: 10:00AM - 08-30PM</p>
                                <p>Domingo: 12:00PM - 05:00PM</p>
                            </div>
                        </Col>

                        <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                            <div className="text-center">
                                <h5>Comprar</h5>
                                <p>Whatsapp</p>
                                <p>
                                    <Link to="tel:1199999-8888" className="calling">
                                        11 999999-8888
                                    </Link>
                                </p>

                            </div>
                        </Col>

                        <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                            <div className="text-center">
                                <h5>Siga a gente</h5>
                                <p>Redes Sociais Oficiais</p>
                                <ul className="list-unstyled text-center mt-2">
                                    <li>
                                        <Link to='/'>
                                            <i class="bi bi-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <i class="bi bi-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <i class="bi bi-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <i class="bi bi-youtube"></i>
                                        </Link>
                                    </li>
                                    {/* Observação: i = icons e bi = bootstratp icons */}
                                </ul>

                            </div>
                        </Col>

                    </Row>
                    <Row className="copy_right">
                        <Col>
                            <div>
                                <ul className="list-unstyled text-center mb-0">
                                    <li>
                                        <Link to='/'>
                                            2026. Todos os direitos reservados
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            Sobre nós
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            Termos de uso
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            Política de Privacidade
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>

            {/* Scroll to Top */}
            {isVisible && (
                <div className="scroll_top" onClick={scrollTop}>
                    <i class="bi bi-arrow-up"></i>
                </div>

            )}
        </>
    );

}

export default Footer;