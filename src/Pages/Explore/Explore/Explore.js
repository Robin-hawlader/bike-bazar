import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import ProductsCart from '../../Shared/ProductsCart/ProductsCart';

const Explore = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    return (
        <>
            <div className='container'>
                <Row xs={1} md={3} className="g-4">
                    {
                        bikes.map(product => <ProductsCart product={product}></ProductsCart>)
                    }
                </Row>

            </div>
            <Footer></Footer>
        </>
    );
};

export default Explore;