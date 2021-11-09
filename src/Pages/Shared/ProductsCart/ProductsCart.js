import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ProductsCart = (props) => {
    const { image, name, description } = props.product;
    return (
        <div>
            <Card>
                <Col>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Card>
        </div>
    );
};

export default ProductsCart;