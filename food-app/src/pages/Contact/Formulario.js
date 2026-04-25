import React from "react";
import { Form, Button, Container, Row, Col, Carousel } from "react-bootstrap";
import "../../styles/Contact.css";

function Formulario() {

    return (
        <div>
            <Container className="form">
                <h2 className="titulo_Contato ">Entre em Contato</h2>
                {/* Linha referente ao nome */}
                <Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Col>
                            <Form.Label>Nome </Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Digite seu nome" />
                        </Col>
                    </Form.Group>
                </Row>
                {/* Linha referente ao email  */}
                <Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Col>
                            <Form.Label>Email</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="email" placeholder="nome@exemplo.com" />
                        </Col>
                    </Form.Group>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Mensagem: </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btn_form">
                            Enviar
                        </Button>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Formulario;