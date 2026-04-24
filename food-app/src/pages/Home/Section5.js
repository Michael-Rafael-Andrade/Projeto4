import React from 'react';
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import StoreIOS from "../../assets/shop/appstore.png";
import StoreGoogle from "../../assets/shop/googleplay.png";
import DownloadImage from "../../assets/shop/e-shop.png";
import Brand1 from "../../assets/brands/brand-11.png";
import Brand2 from "../../assets/brands/brand-12.png";
import Brand3 from "../../assets/brands/brand-13.png";
import Brand4 from "../../assets/brands/brand-14.png";
import Brand5 from "../../assets/brands/brand-15.png";
import Brand6 from "../../assets/brands/brand-16.png";
import Brand7 from "../../assets/brands/brand-17.png";
import Brand8 from "../../assets/brands/brand-18.png";



function Section5() {

    return (
        <>
            <section className="shop_section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
                            <h4>Baixe o nosso App</h4>
                            <h2>economize até 20%</h2>
                            <p>Peça seu burguer favorito com apenas alguns toques. Tenha acesso a cupons exclusivos, acompanhe seu pedido em tempo real e ganhe descontos especiais na sua primeira compra pelo app.</p>
                            <Link>
                                <img src={StoreIOS} alt="Disponível na Apple Store" className="img-fluid store m3" />
                            </Link>
                            <Link>
                                <img src={StoreGoogle} alt="Disponível na Google Play Store" className="img-fluid store m3" />
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <img src={DownloadImage} alt="Demonstração do App" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="brand_section">
                <Row>
                    <Carousel fade>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="brand_img">
                                        <img src={Brand1} className="img-fluid" alt="Parceiro 1"></img>
                                    </div>
                                    <div className="brand_img">
                                        <img src={Brand2} className="img-fluid" alt="Parceiro 2"></img>
                                    </div>
                                    <div className="brand_img">
                                        <img src={Brand3} className="img-fluid" alt="Parceiro 3"></img>
                                    </div>
                                    <div className="brand_img">
                                        <img src={Brand4} className="img-fluid" alt="Parceiro 4"></img>
                                    </div>
                                    <div className="brand_img">
                                        <img src={Brand5} className="img-fluid" alt="Parceiro 5"></img>
                                    </div>
                                    <div className="brand_img">
                                        <img src={Brand6} className="img-fluid" alt="Parceiro 6"></img>
                                    </div>
                                    <div className="brand_img">
                                        <img src={Brand7} className="img-fluid" alt="Parceiro 7"></img>
                                    </div>
                                    <div className="brand_img">
                                        <img src={Brand8} className="img-fluid" alt="Parceiro 8"></img>
                                    </div>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="brand_img">
                                        <img src={Brand3} className="img-fluid" alt="Parceiro 3"></img>
                                    </div>
                                    <div className="brand_img">
                                        <img src={Brand4} className="img-fluid" alt="Parceiro 4"></img>
                                    </div>
                                    <div className="brand_img">
                                        <img src={Brand5} className="img-fluid" alt="Parceiro 5"></img>
                                    </div>
                                    <div className="brand_img">
                                        <img src={Brand6} className="img-fluid" alt="Parceiro 6"></img>
                                    </div>
                                    <div className="brand_img">
                                        <img src={Brand7} className="img-fluid" alt="Parceiro 7"></img>
                                    </div>
                                    <div className="brand_img">
                                        <img src={Brand8} className="img-fluid" alt="Parceiro 8"></img>
                                    </div>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </section>
        </>
    );
}

export default Section5;