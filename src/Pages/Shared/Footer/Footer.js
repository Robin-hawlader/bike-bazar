import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { faFacebookSquare, faInstagram, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const fb = <FontAwesomeIcon icon={faFacebookSquare} />
const tawiter = <FontAwesomeIcon icon={faTwitterSquare} />
const youTube = <FontAwesomeIcon icon={faYoutube} />
const insta = <FontAwesomeIcon icon={faInstagram} />

const rightAngle = <FontAwesomeIcon icon={faAngleRight} />

const Footer = () => {
    return (
        <div className='bg-dark footer'>
            <Container>
                <Row md={3}>
                    <Col sm={12} className='text-light'>
                        <div>
                            <h4>Flow Our Social Networks</h4>
                            <h2 className='mt-4 ms-3'><span className='ms-3 text-primary'>{fb}</span><span className='ms-3 text-danger'>{youTube}</span><span className='ms-3 text-info'>{tawiter}</span><span className='ms-3 text-danger'>{insta}</span></h2>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <nav className='link-footer text-light'>
                            <h3>Main Links</h3>
                            <Link to="/home">{rightAngle} Home</Link> <br />
                            <Link to="/mycart">{rightAngle} My Cart</Link> <br />
                            <Link to="/booking">{rightAngle} Booking</Link><br />
                            <Link to="/addServices">{rightAngle}  Add New</Link><br />
                            <Link to="/login">{rightAngle} Login</Link>

                        </nav>

                    </Col>
                    <Col sm={12} className='text-light'>
                        <div className='opening'>
                            <h4>Up Comming Events</h4>
                            <h2 className='text-danger'>Off-  50%</h2>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Footer;