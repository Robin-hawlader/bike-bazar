import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Contexts/useAuth';

const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { user } = useAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/bikes/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <h2>Product id: {id}</h2>
            <img src={product.image} alt="" />
            <h2>{user.displayName}</h2>

        </div>
    );
};

export default Purchase;




