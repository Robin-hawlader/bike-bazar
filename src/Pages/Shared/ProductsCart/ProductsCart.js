import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './ProductCart.css'

const ProductsCart = (props) => {
    const { image, name, description, _id } = props.product;
    const history = useHistory();
    const handleDetails = (id, product) => {
        console.log(product)
        history.push(id)
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json)
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <Card>
                <Col className='h-100'>
                    <Card.Img className='img-size' variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Button onClick={() => handleDetails(`/purchase/${_id}`, props.product)} variant='danger'>Review</Button>
            </Card>
        </div>
    );
};

export default ProductsCart;