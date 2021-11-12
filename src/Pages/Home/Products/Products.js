import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ProductsCart from '../../Shared/ProductsCart/ProductsCart';


const Products = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('https://murmuring-oasis-61179.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    const products = bikes.slice(0, 6);
    return (
        <div className='container my-5'>
            <h2 className='mb-5'><span className='border-bottom border-danger border-3'>Bike Bazar</span></h2>
            <Row xs={1} md={3} className="g-4">
                {
                    products.map(product => <ProductsCart key={product._id} product={product}></ProductsCart>)
                }
            </Row>
        </div>
    );
};

export default Products;