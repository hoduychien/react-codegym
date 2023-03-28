import React from 'react';
import { Outlet } from 'react-router-dom';
import './manageContacts.scss';

const ManageContacts = () => {
    return (
        <div className="container">
            <Outlet />
        </div>
    );
};

export default ManageContacts;
