import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const MyOrdersCart = (props) => {
    const { product } = props.orders;
    const { handleDelete } = props;
    const { _id } = props.orders;
    return (
        <div>
            <Card>
                <Col className='h-100'>
                    <Card.Img className='img-size' variant="top" src={product?.image} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Card.Title>{product.price}</Card.Title>
                        <small>{product._id}</small>
                    </Card.Body>
                </Col>
                <Button onClick={() => handleDelete(_id)} variant='danger'>Cancel Order</Button>
            </Card>
        </div>
    );
};

export default MyOrdersCart;