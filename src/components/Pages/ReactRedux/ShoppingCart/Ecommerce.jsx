import React from 'react';
import { Outlet } from 'react-router-dom';
import Products from './Products';
import ShoppingCart from './ShoppingCart';

const Ecommerce = () => {
    return (
        <div className="container">
            <Products />
            <Outlet></Outlet>
        </div>
    );
};

export default Ecommerce;
