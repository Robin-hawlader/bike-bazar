import React from 'react';
import { Col, Row } from 'react-bootstrap';
import bike from '../../images/updateBike/banner-3.jpg'
const UpdateProduct = () => {
    return (
        <div className='m-4'>
            <Row xs={1}>
                <Col>
                    <img className='img-fluid' src={bike} alt="" />
                </Col>
                <Col>
                    <p>
                        Come down and visit us and check out our new equipment including MID DRIVE Electric Bikes, Electric EScooters and a new fleet of lighter and more comfortable Double and Single kayaks. With everything from Tandem bikes, Hybrid bikes, Sups and our ever popular Family Quad Cycles we have something for everyone to enjoy the great outdoors.
                    </p>
                </Col>
            </Row>
        </div>
    );
};

export default UpdateProduct;