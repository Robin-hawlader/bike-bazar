import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReviewItem from './ReviewItem';

const ReviewHome = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='mb-5'><span className='border-bottom border-danger border-3'>Client Review Our Sites</span></h2>
            <Row xs={1} md={3} className="g-4">
                {
                    review.map(item => <ReviewItem key={item._id} review={item}></ReviewItem>)
                }
            </Row>
        </div>
    );
};

export default ReviewHome;