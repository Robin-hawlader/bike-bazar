import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import UpdateProduct from '../../UpdateProduct/UpdateProduct';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import ReviewHome from '../ReviewHome/ReviewHome';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ReviewHome></ReviewHome>
            <UpdateProduct></UpdateProduct>
            <Footer></Footer>
        </div>
    );
};

export default Home;