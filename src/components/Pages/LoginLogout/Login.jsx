import React, { Component } from 'react';
import Home from './Home';
import './loginLogout.scss';
import data from './data.js';

export default class LoginLogout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSuccess: false,
            email: '',
            password: '',
            erorr: false,
        };
    }

    handleLogin = (email, pasword) => {
        let check = data.filter((item) => item.email === email && item.password === pasword);
        console.log(check);

        if (check != '') {
            this.setState({
                isSuccess: true,
                erorr: false,
            });
        } else {
            this.setState({
                erorr: true,
            });
        }
    };
    handleLogout = () => {
        this.setState({
            isSuccess: false,
        });
    };

    handleOnchangeInput = (e) => {
        let stateCopy = { ...this.state };
        stateCopy[e.target.name] = e.target.value;
        this.setState({
            ...stateCopy,
        });
    };

    render() {
        let { isSuccess, email, password, erorr } = this.state;
        return (
            <div className="container">
                <div className="title">[Bài tập] Xử lý sự kiện Login/Logout với form đăng nhập bằng Bootstrap</div>
                <div className="content">
                    <h4>Mục tiêu </h4>
                    <ul>
                        <li>Tạo được dự án React JS</li>
                        <li>Thao tác với state thông qua event </li>
                        <li>Giao tiếp giữa các components </li>
                        <li>Thao tác với componentWillUnmount </li>
                    </ul>
                    <h4>Mô tả bài toán</h4>
                    <span>Viết chương trình cho phép Login/ Logout với Bootstrap</span>
                </div>

                {!isSuccess ? (
                    <div className="form-signin-main">
                        <div className="form-signin form-group" method="GET">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
                                alt=""
                                className="form-signin-logo"
                            />
                            <p className="form-signin-title p-3 text-center">Please sign in</p>
                            <div className="form-item form-signin-item">
                                <input
                                    type="email"
                                    className="form-control shadow-none rounded-0 border-bottom-0"
                                    placeholder="Email address"
                                    id="email"
                                    name="email"
                                    pattern="^\S+@\S+\.\S+$"
                                    onChange={(e) => this.handleOnchangeInput(e)}
                                />
                            </div>

                            <div className="form-item form-signin-item">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control shadow-none rounded-0"
                                    placeholder="Password"
                                    onChange={(e) => this.handleOnchangeInput(e)}
                                />
                            </div>
                            {erorr && <p className="form-err">Something Wrongs !!!</p>}
                            <div className="form-item p-2">
                                <input type="checkbox" id="remember" />
                                <label className="p-1" htmlFor="remember">
                                    Remember me
                                </label>
                            </div>
                            <div className="form-item pb-3">
                                <button
                                    className="form-signin-btn btn btn-primary"
                                    onClick={() => this.handleLogin(email, password)}
                                >
                                    Sign in
                                </button>
                            </div>

                            <p className="form-signin-copy mt-1 text-muted text-center">© 2017–2021</p>
                        </div>
                    </div>
                ) : (
                    <Home userInfo={email} handleLogout={this.handleLogout} />
                )}
            </div>
        );
    }
}
