import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/Blog.css";
import BlogImg1 from "../../assets/blog/review-author-1.jpg";
import BlogImg2 from "../../assets/blog/review-author-2.jpg";
import BlogImg3 from "../../assets/blog/review-author-3.jpg";
import BlogImg4 from "../../assets/blog/review-author-5.jpg";
import BlogImg from "../../assets/blog/reviews.jpg";

function Section1Blog() {

    // Criando um array de objetos para organizar os dados
    const blogPosts = [
        {
            id: 1,
            img: BlogImg1,
            title: "Dicas de Sabor",
            text: "O Segredo do nosso blend...",
        },
        {
            id: 2,
            img: BlogImg2,
            title: "Ingredientes",
            text: "Qualidade em cada detalhe..",
        },
        {
            id: 3,
            img: BlogImg3,
            title: "Nossa História",
            text: "Como tudo começou...",
        },
    ];

    return (
        <section className="blog_section_custom">
            <Container>
                <h2 className="text-center mb-5">Novidades Tasty Burger</h2>
                <Row>
                    {blogPosts.map((post) => (
                        <Col md={4} key={post.id} className="mb-4">
                            <div className="blog_card">
                                {/* Utilize a imagem importada no src */}
                                <img src={post.img} alt={post.title} className="img-fluid" />
                                <div className="blog_content">
                                    <h5>{post.title}</h5>
                                    <p>{post.text}</p>
                                    <a href="/" className="blog_link">Ler mais</a>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Section1Blog;