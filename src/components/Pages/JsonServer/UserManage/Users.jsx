import React, { useEffect, useState } from 'react';
import { useFormatDate } from '../../hooks';
import './users.scss';
import { Pagination } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import avatar from '../../../../assets/img/default-avatar.jpg';

import ModalCreateUser from './ModalCreateUser';
import ModalEditUser from './ModalEditUser';

const Users = ({ users, loading, handleChange, currentPage, perPage, getUsers }) => {
    const [formatTime] = useFormatDate();
    const [usersData, setUsers] = useState();
    const [page, setPage] = useState();
    const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState();
    const getDataTable = async () => {
        try {
            const res = await axios(`http://localhost:3004/users`);
            setUsers(res.data.body);
            if (res.data && res.data.body.length > 0) {
                setPage(Math.ceil(res.data.body.length / perPage));
            }
        } catch (error) {
            toast.error('Opp! Something wrong...', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    };

    useEffect(() => {
        getDataTable();
    }, []);

    const handleOpen = () => {
        setIsOpenCreateModal(!isOpenCreateModal);
    };
    const handleOpenEditModal = (user) => {
        setSelectedUser(user);
        setIsOpenEditModal(!isOpenEditModal);
    };

    const createUser = async (data) => {
        try {
            const response = await axios.post('http://localhost:3004/users', data);
            if (response.data.statusCode === 201) {
                getDataTable();
                getUsers();
                toast.success('Create user success ~', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            }
        } catch (error) {
            toast.error('Opp! Something wrong...', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            if (window.confirm('Are you sure you want to delete')) {
                const response = await axios.delete(`http://localhost:3004/users/${id}`);

                if (response.data.statusCode === 200) {
                    getDataTable();
                    getUsers();
                    toast.success('Delete user success ~', {
                        position: 'bottom-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                }
            }
        } catch (error) {
            toast.error('Opp! Something wrong...', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    };

    const handleUpdateUser = async (data) => {
        console.log(data);
        try {
            if (window.confirm(`Are you sure you want to update user : ${data.name}`)) {
                const response = await axios.put(`http://localhost:3004/users/${data.id}`, data);
                if (response.data.statusCode === 200) {
                    getDataTable();
                    getUsers();
                    toast.success('Update user success ~', {
                        position: 'bottom-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                }
            }
        } catch (error) {
            toast.error('Opp! Something wrong...', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    };

    return (
        <div className="book_manager">
            <ToastContainer />

            <ModalCreateUser handleOpen={handleOpen} createUser={createUser} open={isOpenCreateModal} />
            {isOpenEditModal && (
                <ModalEditUser
                    handleOpen={handleOpenEditModal}
                    updateUser={handleUpdateUser}
                    selectedUser={selectedUser}
                    open={isOpenEditModal}
                />
            )}
            <div className="book_manager-heading">
                <h3>Data Table </h3>
                <div className="book_manager-button book_manager-button-create" onClick={handleOpen}>
                    Create User
                </div>
            </div>
            <table className="users-manage">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Updated</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {!loading && usersData && usersData.length > 0 ? (
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={user.avatar ? user.avatar : avatar} alt="" className="users-img" />
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.gender == 1 ? 'Male' : user.gender == 2 ? 'Female' : ''}</td>
                                <td>
                                    <span className={user.status == 1 ? 'users-active' : 'users-inactive'}>
                                        {user.status == 1 ? 'active' : 'inactive'}
                                    </span>
                                </td>
                                <td>{formatTime(user.updatedAt)}</td>
                                <td>
                                    <div className="users-action">
                                        <button
                                            className="book_manager-button book_manager-button-edit"
                                            onClick={() => handleOpenEditModal(user)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="book_manager-button book_manager-button-delete"
                                            onClick={() => handleDeleteUser(user.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                ) : (
                    <tbody>
                        <tr>
                            <td colSpan="6">Loading</td>
                        </tr>
                    </tbody>
                )}
            </table>

            <div className="book_manager-pagination">
                <Pagination
                    onChange={handleChange}
                    count={page}
                    page={currentPage}
                    variant="outlined"
                    shape="rounded"
                />
            </div>
        </div>
    );
};

export default Users;
