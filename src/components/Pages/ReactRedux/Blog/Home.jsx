import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_POSTS' });
    }, []);
    return (
        <div className="container">
            <Outlet />
        </div>
    );
};

export default Home;
