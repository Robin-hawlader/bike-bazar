import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../Contexts/useAuth';
import MyOrdersCart from './MyOrdersCart';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://murmuring-oasis-61179.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email])

    const handleDelete = id => {
        const proced = window.confirm('You want to Cancel your Order')
        if (proced) {
            const url = `https://murmuring-oasis-61179.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    alert('Cancel Successfully')
                    if (data.deletedCount > 0) {
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining);

                    }
                })
        }
    }

    return (
        <div>
            {orders.length === 0 && <h2>You dont have Orders!</h2>}
            <Row xs={1} md={3} className="g-4">
                {
                    orders.map(order => <MyOrdersCart
                        key={order._id}
                        orders={order}
                        handleDelete={handleDelete}
                    ></MyOrdersCart>)
                }
            </Row>
        </div>
    );
};

export default MyOrders;