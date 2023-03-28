import React, { useEffect } from 'react';
import './userRedux.scss';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginReducer = useSelector((state) => state.loginReducer);

    useEffect(() => {
        if (loginReducer.userLogin.email) {
            navigate('/react-redux-user-manager/users');
        }
    }, [loginReducer, navigate]);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            dispatch({ type: 'LOGIN', payload: values });
        },
    });
    return (
        <div className="redux-login">
            <div className="form-login">
                <div className="redux-login-title">
                    <h3>Sign In</h3>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary ">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
