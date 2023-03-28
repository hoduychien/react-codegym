import React from 'react';
import { Outlet } from 'react-router-dom';

const UserReduxSaga = () => {
    return (
        <div className="container">
            <Outlet />
        </div>
    );
};

export default UserReduxSaga;
