import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Contexts/useAuth';
import './Headers.css';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto link-customize">
                            <Nav>
                                <Link to='/home'>Home</Link>
                                <Link to='/explore'>Explore</Link>
                            </Nav>

                            <Nav>
                                {
                                    user.email ? <div>
                                        <Link to='/dashboard'>Dash board</Link>
                                        <Button variant='danger' onClick={logout} className='ms-2'>Logout</Button>
                                    </div>
                                        :
                                        <Link to='/login'>Login</Link>
                                }
                            </Nav>
                        </Nav>
                        <Nav>
                            {user?.email && <Nav.Link href="#deets">{user.displayName}</Nav.Link>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;