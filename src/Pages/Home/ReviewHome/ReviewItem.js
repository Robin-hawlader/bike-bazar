import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';


const star = <FontAwesomeIcon icon={faStar} />
const ReviewItem = (props) => {
    const { review } = props;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>Name: {review.name}</Card.Title>
                        <Card.Text>
                            {review.comment}
                        </Card.Text>
                        <p><small><b>email: </b><i>{review.email}</i></small></p>
                        <span><b>Rating: </b>{review.rate} <span className='text-warning'>{star}</span></span>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ReviewItem;