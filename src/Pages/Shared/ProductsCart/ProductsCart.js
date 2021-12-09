import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ProductsCart = (props) => {
    const { image, name, description, _id, price } = props.product;
    const history = useHistory();
    const handleDetails = (id, product) => {
        history.push(id)
    }

    return (
        <div>
            <Card className='h-100'>
                <Col >
                    <Card.Img className='img-fluid' variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Title>BDT {price}</Card.Title>
                    </Card.Body>
                </Col>
                <Button onClick={() => handleDetails(`/purchase/${_id}`)} variant='danger'>Add to cart</Button>
            </Card>
        </div>
    );
};

export default ProductsCart;