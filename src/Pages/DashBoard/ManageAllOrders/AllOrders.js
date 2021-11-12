import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const AllOrders = (props) => {
    const { product } = props.orders;
    const { orders, handleDelete } = props;
    const { _id } = props.orders;
    return (
        <div>
            <Card>
                <Col className='h-100'>
                    <Card.Img className='img-size' variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Card.Title>{product.price}</Card.Title>
                        <span>Ordere By: <b>{orders.name}</b></span>
                        <p><small><span><b>email: </b></span><i>{orders.email}</i></small></p>
                    </Card.Body>
                </Col>
                <Button onClick={() => handleDelete(_id)} variant='danger'>Decline Order</Button>
            </Card>
        </div>
    );
};

export default AllOrders;