import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid Email').required('Please enter Email address'),
            password: Yup.string()
                .min(6, `Password must be as least 6 characters !`)
                .required('Please enter password !'),
        }),
        validate: (values) => {
            const errors = {};
            if (values.email !== 'admin@gmail.com') {
                errors.email = 'Email does not exist in the system !';
            }

            return errors;
        },
        onSubmit: (values) => {
            if (values.email === 'admin@gmail.com' && values.password !== '123456') {
                alert('Wrong password');
            }

            if (values.email === 'admin@gmail.com' && values.password === '123456') {
                navigate('/router-ex-2/home', {
                    state: { email: values.email, password: values.password },
                });
            }
        },
    });
    return (
        <div className="conainer">
            <form className="router-form" onSubmit={formik.handleSubmit}>
                <h3>Sign In</h3>
                <div className="router-form-control">
                    <input
                        type="text"
                        placeholder="Enter email ..."
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />

                    {formik.errors.email && formik.touched.email && <span>{formik.errors.email}</span>}
                </div>
                <div className="router-form-control">
                    <input
                        type="password"
                        placeholder="Enter password ..."
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.password && formik.touched.email && <span>{formik.errors.password}</span>}
                </div>
                <div className="router-form-control">
                    <button className="router-form-button" type="submit">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
