import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Users from './Users';

const UserManager = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(5);

    const handleChange = (event, value) => {
        setCurrentPage(value);
        console.log(value);
    };
    const getUsers = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`http://localhost:3004/users?_page=${currentPage}&_limit=${perPage}}`);
            setUsers(res.data.body);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUsers();
    }, [currentPage]);

    return (
        <div className="container">
            <Users
                users={users}
                getUsers={getUsers}
                perPage={perPage}
                currentPage={currentPage}
                handleChange={handleChange}
                loading={loading}
            />
        </div>
    );
};

export default UserManager;
