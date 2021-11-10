import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import RivewCart from '../../RivewCart/RivewCart';
import ProductsCart from '../../Shared/ProductsCart/ProductsCart';

const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div className='container'>
            <h2>Review {review.length}</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    review.map(product => <RivewCart key={product._id} product={product}></RivewCart>)
                }
            </Row>
        </div>
    );
};

export default Review;