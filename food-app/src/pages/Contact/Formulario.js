import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Carousel } from "react-bootstrap";
import "../../styles/Contact.css";

function Formulario() {

    const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Obrigado, ${formData.nome}! Mensagem enviada.`);
    };

    return (
        <div>
            <Container className="form">
                <h2 className="titulo_Contato ">Entre em Contato</h2>
                <Form onSubmit={handleSubmit}>                {/* Linha referente ao nome */}
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nome </Form.Label>
                            <Form.Control type="text" placeholder="Digite seu nome" value={formData.nome} onChange={(e) => setFormData({
                                ...formData,
                                nome: e.target.value
                            })} required
                            />
                        </Form.Group>
                    </Row>
                    {/* Linha referente ao email  */}
                    <Row>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="nome@exemplo.com" value={formData.email} onChange={(e) => setFormData({
                                ...formData,
                                email: e.target.value
                            })} required
                            />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Mensagem: </Form.Label>
                            <Form.Control as="textarea" rows={3} value={formData.mensagem} onChange={(e) => setFormData({
                                ...formData,
                                mensagem: e.target.value
                            })} required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btn_form">
                            Enviar
                        </Button>
                    </Row>
                </Form>
            </Container>

        </div>
    );
}

export default Formulario;