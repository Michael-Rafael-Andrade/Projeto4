import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Burger from '../../assets/hero/hero-2.png';
import { Link } from "react-router-dom";


function Section1() {

    return (
        <section>
            <Container>
                <Row>
                    <Col lg={7} className="mb-5 mb-lg-0">
                        <div>
                            <img src={Burger} className="img-fluid" />
                            <div className="price_badge">
                                <div className="badge_text">
                                    <h4 className="h4_xs"> Apenas </h4>
                                    <h4 className="h3_lg"> R$ 26,99 </h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="hero_text text-center">
                            <h1 className="text-white">Novo Burguer</h1>
                            <h1 className="text-white">Double Cheddar</h1>
                            <p className="texte-white pt-2 pb-4">
                                Experimente o novo Doubble Burguer:
                                2x bifes, 2x mais cebola, 2x queijos cheddar, 2x salada, maionese caseira e um pão extremamente macio.
                            </p>
                            <Link to='/' className="btn order_now">
                                Comprar
                            </Link>

                        </div>
                    
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Section1;