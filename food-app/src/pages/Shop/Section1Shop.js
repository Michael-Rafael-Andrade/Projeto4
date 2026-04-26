import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/Shop.css";

function Section1Shop() {

    
    return (
        <>
            <section className="shop_parallax_section">
                <div className="parallax_content">
                    <h1>Nossa Loja</h1>
                    <p>Os melhores produtos para o seu hambúrguer</p>
                </div>
            </section>

            <section className="shop_products_section">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col lg={8}>
                            <h2>Produtos Exclusivos</h2>
                            <p>Em breve você poderá adquirir nossos blends e acessórios aqui.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Section1Shop;