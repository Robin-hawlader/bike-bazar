import React from 'react';
import notFound from '../../images/not-found/not-found-page.jpg'

const NotFound = () => {
    return (
        <div className='my-3'>
            <img className='img-fluid' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;