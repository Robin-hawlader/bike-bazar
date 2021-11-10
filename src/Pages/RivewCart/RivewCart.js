import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './ReviewCart.css'

const RivewCart = (props) => {
    const { image, name, description, _id } = props.product;
    const history = useHistory();
    const handleDetails = (id) => {
        history.push(id)
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
                <Button onClick={() => handleDetails(`/purchase/${_id}`, props.product)} variant='danger'>Details</Button>
            </Card>
        </div>
    );
};

export default RivewCart;