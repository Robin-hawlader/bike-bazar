import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import ProductsCart from '../../Shared/ProductsCart/ProductsCart';
import Uploaded from '../Uploded/Uploaded';

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
                <h2 className='mb-5'><span className='border-bottom border-danger border-3'>Expore Our Products</span></h2>
                <Row xs={1} md={3} className="g-4">
                    {
                        bikes.map(product => <ProductsCart key={product._id} product={product}></ProductsCart>)
                    }
                </Row>

            </div>
            <h2 className='mb-5'><span className='border-bottom border-danger border-3'>New added bikes</span></h2>
            <Uploaded></Uploaded>
            <Footer></Footer>
        </>
    );
};

export default Explore;