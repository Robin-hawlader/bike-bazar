import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../Contexts/useAuth';
import AdminRoute from '../../PrivateRoute/AdminRoute/AdminRoute';
import Footer from '../../Shared/Footer/Footer';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllorders from '../ManageAllOrders/ManageAllorders';
import MyOrders from '../MyOrders/MyOrders';
import Payments from '../Payments/Payments';
import Reviews from '../Review/Reviews';
import './DashBoard.css';

const DashBoard = () => {
    const { logout, admin } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div>
            <div className='m-3'>
                <Row>
                    <Col className='Link-properties' md={3}>
                        <Link to='/dashboard'>Dash board</Link><br />
                        {admin && <div>
                            <Link to={`${url}/makeAdmin`}>Make Admin</Link><br />
                            <Link to={`${url}/addProducts`}>Add Products</Link><br />
                            <Link to={`${url}/manageAllOrders`}>Manage All orders</Link><br />
                        </div>}
                        {!admin && <div>
                            <Link to={`${url}/payment`}>Payments</Link><br />
                            <Link to={`${url}/myorders`}>My Orders</Link><br />
                            <Link to={`${url}/review`}>Review</Link><br />
                        </div>}
                        <Button variant='danger' onClick={logout} className='ms-2'>Logout</Button><br />
                    </Col>
                    <Col md={9}>
                        <Switch>
                            <Route exact path={path}>
                                <h2>Please select Item</h2>
                            </Route>
                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addProducts`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageAllOrders`}>
                                <ManageAllorders></ManageAllorders>
                            </AdminRoute>
                            <Route path={`${path}/payment`}>
                                <Payments></Payments>
                            </Route>
                            <Route path={`${path}/myorders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Reviews></Reviews>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default DashBoard;