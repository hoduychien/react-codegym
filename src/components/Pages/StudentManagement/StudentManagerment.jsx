import React, { useState } from 'react';
import './studentManagerment.scss';
const StudentManagerment = () => {
    const [student, setStudent] = useState([]);
    const [erorrMessage, setErorrMessage] = useState('');
    const [buttonStatus, setButtonStatus] = useState(true);
    const [user, setUser] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const handleOnchangeInput = (e) => {
        let userCopy = { ...user };
        userCopy[e.target.name] = e.target.value;
        setUser(userCopy);
    };

    const handleCreate = () => {
        if (user.phone.length === 0 || user.name.length === 0 || user.email.length === 0) {
            setErorrMessage('Missing information !!!');
            return;
        }

        if (student.filter((item) => item.email === user.email).length === 0) {
            setStudent([...student, user]);
            setUser({
                name: '',
                phone: '',
                email: '',
            });
            setErorrMessage('');

            return;
        }
        setErorrMessage('Email already exists');
    };

    const handleDelete = (email) => {
        setStudent(student.filter((item) => item.email !== email));
    };

    const handleSubmitupdate = (user) => {
        if (student.length > 0) {
            let newArr = student.map((item) => {
                item.name = item.email == user.email ? user.name : item.name;
                item.phone = item.email == user.email ? user.phone : item.phone;
                item.email = item.email == user.email ? user.email : item.email;
                return item;
            });

            setStudent(newArr);
        }
    };
    const handleUpdate = (student) => {
        setUser(student);
        setButtonStatus(!buttonStatus);
    };

    const handleCancleUpdate = () => {
        setButtonStatus(!buttonStatus);
        setUser({
            name: '',
            phone: '',
            email: '',
        });
        setErorrMessage('');
    };

    return (
        <div className="container">
            <div className="title">[B??i t???p] ???ng d???ng qu???n l?? h???c sinh (CRUD s??? d???ng Table)</div>
            <div className="content">
                <h4>M???c ti??u </h4>
                <ul>
                    <li>T???o ???????c d??? ??n React JS</li>
                    <li>S??? d???ng ???????c c?? ph??p JSX </li>
                    <li>S??? d???ng ???????c Event handler</li>
                </ul>
                <h4>M?? t??? b??i to??n</h4>
                <span>
                    Vi???t ch????ng tr??nh th??? hi???n ???????c b???ng th??ng tin c???a c??c sinh vi??n trong l???p h???c <br />
                </span>
                <span>Ch???c n??ng:</span>
                <ul>
                    <li>Th??m th??ng tin sinh vi??n</li>
                    <li>Ch???nh s???a th??ng tin sinh vi??n </li>
                    <li>Xo?? th??ng tin sinh vi??n </li>
                </ul>

                <div className="manager">
                    <div className="manager-form">
                        <div className="manager-title">Student Managerment</div>
                        <div className="manager-err">{erorrMessage ? erorrMessage : ''}</div>
                        <div className="manager-form-item">
                            <label htmlFor="">Fullname</label>
                            <input
                                type="text"
                                placeholder="Enter fullname ..."
                                name="name"
                                onChange={(e) => handleOnchangeInput(e)}
                                value={user.name}
                            />
                        </div>
                        <div className="manager-form-item">
                            <label htmlFor="">Email Address</label>
                            <input
                                type="text"
                                placeholder="Enter email address ..."
                                name="email"
                                onChange={(e) => handleOnchangeInput(e)}
                                value={user.email}
                            />
                        </div>
                        <div className="manager-form-item">
                            <label htmlFor="">Phone Number</label>
                            <input
                                type="number"
                                placeholder="Enter phone number ..."
                                name="phone"
                                onChange={(e) => handleOnchangeInput(e)}
                                value={user.phone}
                            />
                        </div>
                        <div className="manager-form-action">
                            {buttonStatus && (
                                <div className="manager-form-button" onClick={() => handleCreate()}>
                                    Create
                                </div>
                            )}
                            {!buttonStatus && (
                                <div className="manager-form-action">
                                    <div className="manager-form-button" onClick={() => handleSubmitupdate(user)}>
                                        Update
                                    </div>
                                    <div className="manager-form-button" onClick={() => handleCancleUpdate()}>
                                        Cancel
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <table className="manager-table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Fullname</th>
                                <th>Email address</th>
                                <th>Phone number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {student.map((item, index) => {
                                return (
                                    <tr key={item.email}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <div className="manager-table-action">
                                                <button
                                                    className="manager-table-button"
                                                    onClick={() => handleDelete(item.email)}
                                                >
                                                    <span>Delete</span>
                                                </button>
                                                <button
                                                    className="manager-table-button"
                                                    onClick={() => handleUpdate(item)}
                                                >
                                                    <span>Update</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentManagerment;
