import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductsCart from '../../Shared/ProductsCart/ProductsCart';


const Products = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    const products = bikes.slice(0, 6);
    return (
        <div className='container'>
            <Row xs={1} md={2} className="g-4">
                {
                    products.map(product => <ProductsCart product={product}></ProductsCart>)
                }
            </Row>

        </div>
    );
};

export default Products;