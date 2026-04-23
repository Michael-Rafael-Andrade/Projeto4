import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";


const mockData = [
    {
    image: Pizza,
    title: "Sabor Original",
    paragraph: "Nossas receitas seguem tradições clássicas, utilizando ingredientes frescos e selecionados para garantir aquele gosto autêntico de comida feita na hora."
    },
    {
    image: Salad,
    title: "Qualidade Garantida",
    paragraph: "Trabalhamos com fornecedores locais e produtos orgânicos de alta qualidade, garantindo uma refeição nutritiva, saudável e cheia de sabor."
    },
    {
    image: Delivery,
    title: "Entrega Rápida",
    paragraph: "Sua fome não pode esperar. Temos uma logística inteligente para que seu pedido chegue quente e impecável na sua porta em tempo recorde."
    }

];


function Section2() {

    return (
        <>
            <section className="about_section">
                <Container>
                    <Row>
                        <Col lg={{span:8, offset:2}} className="text-center">
                            <h2>O hambúrguer fica mais gostoso quando você come com a sua família</h2>
                            <p>
                                Acreditamos que o segredo de um bom lanche não está penas nos ingredientes selecionados mas nos momentos compartilhados à mesa. Cada mordida ganha um sabor especial quando cercada por boas risadas e a companhia de quem amamos. Por isso, preparamos nossas receitas com o carinho de quem cozinha para a própria família, transformando uma simples refeição em uma memória inesquecível.
                            </p>
                            <Link to='/' className="btn order_now btn_red">
                                Menu Completo
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Section2;