import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AllOrders from './AllOrders';

const ManageAllorders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allorders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handleDelete = id => {
        const proced = window.confirm('You want to Cancel your Order')
        if (proced) {
            const url = `http://localhost:5000/orders/${id}`
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
            <Row xs={1} md={3} className="g-4">
                {
                    orders.map(order => <AllOrders
                        key={order._id}
                        orders={order}
                        handleDelete={handleDelete}
                    ></AllOrders>)
                }
            </Row>
        </div>
    );
};

export default ManageAllorders;