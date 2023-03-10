import React, { useState } from 'react';
import './practice1.scss';
const Practice1 = () => {
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        confirm: '',
    });

    const [error, setError] = useState({ e: {} });

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    const handleChange = (event) => {
        const newError = { ...error };
        if (event.target.value === '') {
            newError.e[event.target.name] = `Please enter ${event.target.name}`;
        } else {
            newError.e[event.target.name] = ``;
        }
        setError(newError);
        setState({ ...state, [event.target.name]: event.target.value });
    };
    const handleSumbit = (event) => {
        event.preventDefault();
        const newError = { ...error };

        if (state.password && state.confirm && state.confirm !== state.password) {
            newError.e.confirm = `Password confirm not match`;
        }

        if (!emailRegex.test(state.email)) {
            newError.e.email = `Email address is not valid`;
        }

        if (state.username.length <= 2) {
            newError.e.username = `Username must be as least 2 characters `;
        }
        if (state.password.length <= 6) {
            newError.e.password = `Password must be as least 6 characters `;
        }

        setError(newError);

        if (!error.e.username && !error.e.email && !error.e.password && !error.e.confirm) {
            alert('Sign up successfully!!');
        }
    };

    return (
        <div className="container">
            <div className="title">[Thực hành] Validate Form đăng ký</div>
            <div className="content">
                <h4>Mục tiêu </h4>
                <ul>
                    <li>Tạo được dự án React JS</li>
                    <li>Thao tác với state thông qua event </li>
                    <li>Thực hành với cơ chế condition rendering </li>
                    <li>Thực hành validate form </li>
                </ul>
                <h4>Mô tả bài toán</h4>
                <div>Viết chương trình cho phép sign up</div>
                <div>
                    Khi người dùng thực hiện gõ ở một trường bất kì, thực hiện validate và hiển thị error để người dùng
                    biết lỗi đang gặp phải
                </div>
            </div>

            <form className="signin-form" onSubmit={handleSumbit}>
                <div className="signin-form-item">
                    <h4>Sign In</h4>
                </div>
                <div className={error.e.username ? 'signin-form-item signin-form-item-error' : 'signin-form-item '}>
                    <label htmlFor="username">UserName</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={handleChange}
                        onBlur={handleChange}
                        placeholder="Enter username ..."
                    />
                    {error.e.username && <span className="signin-form-erorr">{error.e.username}</span>}
                </div>

                <div className={error.e.email ? 'signin-form-item signin-form-item-error' : 'signin-form-item '}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleChange}
                        placeholder="Enter email address ..."
                    />
                    {error.e.email && <span className="signin-form-erorr">{error.e.email}</span>}
                </div>

                <div className={error.e.password ? 'signin-form-item signin-form-item-error' : 'signin-form-item '}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleChange}
                        placeholder="Enter password ..."
                    />
                    {error.e.password && <span className="signin-form-erorr">{error.e.password}</span>}
                </div>
                <div className={error.e.confirm ? 'signin-form-item signin-form-item-error' : 'signin-form-item '}>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input
                        type="password"
                        id="confirm"
                        name="confirm"
                        placeholder="Confirm password ..."
                        onChange={handleChange}
                        onBlur={handleChange}
                    />
                    {error.e.confirm && <span className="signin-form-erorr">{error.e.confirm}</span>}
                </div>

                <div className="signin-form-item">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Practice1;
