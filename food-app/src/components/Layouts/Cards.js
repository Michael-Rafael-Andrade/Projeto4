
import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cards({ image, title, rating, paragraph, price, renderRatingIcons }){

    return(
        <Col sm={6} lg={4} xl={3} className="mb-4">
            <Card className="overflow-hideen h-100">
                <div className="overflow-hidden">
                    <Card.Img Variant="top" src={image} />
                </div>
                <Card.Body className="d-flex flex-column">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="item_rating">{renderRatingIcons(rating)}</div>
                        <div className="wishlist">
                            <i className="bi bi-heart"></i>
                        </div>
                    </div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="flex-grow-1">{paragraph}</Card.Text>
                    <div className="d-flex align-items-center justify-content-between mt-3">
                        <div className="menu_price">
                            <h5>R${Number(price).toFixed(2).replace('.',',')}</h5>
                        </div>
                        <div className="add_to_card">
                            <Link>
                                <i className="bi bi-bag me-2"></i>
                                Adicionar
                            </Link>
                        </div>
                    </div>

                </Card.Body>

            </Card>

        </Col>
    );
};

export default Cards;