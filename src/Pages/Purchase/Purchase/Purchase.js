import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Contexts/useAuth';
import { useForm } from "react-hook-form";
import './Pucchase.css';
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';


const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [newProduct, setNewProduct] = useState({})
    const { user } = useAuth()

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.product = product || newProduct;
        fetch('https://murmuring-oasis-61179.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Placed Successful')
                }
            })
        reset()
    };

    useEffect(() => {
        fetch(`https://murmuring-oasis-61179.herokuapp.com/bikes/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    useEffect(() => {
        fetch(`https://murmuring-oasis-61179.herokuapp.com/upload/${id}`)
            .then(res => res.json())
            .then(data => setNewProduct(data))
    }, [])
    return (
        <div>
            <Row className='m-4'>
                <Col className=' alignment-Property'>
                    <div>
                        <Card className='h-100' style={{ width: '20rem', textAlign: 'left' }}>
                            <Card.Img variant="top" src={product?.image || newProduct?.image} />
                            <Card.Body>
                                <Card.Title>{product?.name || newProduct?.name}</Card.Title>
                                <Card.Text>
                                    {product?.description || newProduct?.description}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{product?.name || newProduct?.name}</ListGroupItem>
                                <ListGroupItem>BDT {product?.price || newProduct?.price}</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </div>
                </Col>
                <Col className=' alignment-Property'>
                    <form className='input-field' onSubmit={handleSubmit(onSubmit)}>
                        <input type='text' defaultValue={user.displayName} {...register("name")} />
                        <input type='email' readOnly defaultValue={user.email} {...register("email")} />
                        <input type='number' placeholder='Mobile:' required {...register("mobile")} />
                        <input type='text' placeholder='Adress:' required {...register("address")} />
                        <input type="submit" value='Purchase' />
                    </form>
                </Col>
            </Row>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;




