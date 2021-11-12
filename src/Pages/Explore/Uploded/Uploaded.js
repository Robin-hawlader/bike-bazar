import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ProductsCart from '../../Shared/ProductsCart/ProductsCart';

const Uploaded = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://murmuring-oasis-61179.herokuapp.com/upload')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className='container'>
            <Row xs={1} md={3} className="g-4">
                {
                    product.map(product => <ProductsCart key={product._id} product={product}></ProductsCart>)
                }
            </Row>

        </div>
    );
};

export default Uploaded;