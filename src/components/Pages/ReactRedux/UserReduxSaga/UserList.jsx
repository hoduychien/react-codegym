import React from 'react';
import { useSelector } from 'react-redux';

const UserList = () => {
    const loginReducer = useSelector((state) => state.loginReducer);

    return (
        <div>
            <table className="book_manager-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                    </tr>
                </thead>

                <tbody>
                    {loginReducer.users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>{user.phone}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
