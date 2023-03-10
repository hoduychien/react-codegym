import React from 'react';
import './practice1.scss';
import { useFormik } from 'formik';

const Practice4 = () => {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        // validationSchema: Yup.object({
        //     email: Yup.string().email('Invalid Email').required('Please enter Email address'),
        //     password: Yup.string()
        //         .min(6, `Password must be as least 6 characters !`)
        //         .required('Please enter password !'),
        // }),
        validate: (values) => {
            const errors = {};
            if (values.email.length === 0) {
                errors.email = 'Please enter Email address !';
            }
            if (!emailRegex.test(values.email)) {
                errors.email = 'Invalid Email !';
            }
            if (values.password.length === 0) {
                errors.email = 'Please enter Password !';
            }
            if (values.password.length < 6) {
                errors.password = 'Password must be as least 6 characters !';
            }
            return errors;
        },
        onSubmit: (values) => {
            formik.resetForm();
            alert('Login successfully!!!');
        },
    });

    return (
        <div className="container">
            <div className="title">[Thực hành] Validate Form Login with Formik</div>
            <div className="content">
                <h4>Mục tiêu </h4>
                <ul>
                    <li>Tạo được dự án React JS</li>
                    <li>Thao tác với state thông qua event </li>
                    <li>Thực hành validate form bằng Formik </li>
                </ul>
                <h4>Mô tả bài toán</h4>
                <div>Viết chương trình cho phép login</div>
                <div>
                    Khi người dùng thực hiện gõ ở một trường bất kì, thực hiện validate và hiển thị error để người dùng
                    biết lỗi đang gặp phải
                </div>
            </div>

            <form className="signin-form" onSubmit={formik.handleSubmit}>
                <div className="signin-form-item">
                    <h4>Sign In</h4>
                </div>

                <div
                    className={
                        formik.errors.email && formik.touched.email
                            ? 'signin-form-item signin-form-item-error'
                            : 'signin-form-item '
                    }
                >
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder="Enter email address ..."
                    />
                    {formik.errors.email && formik.touched.email && (
                        <span className="signin-form-erorr">{formik.errors.email}</span>
                    )}
                </div>

                <div
                    className={
                        formik.errors.password && formik.touched.password
                            ? 'signin-form-item signin-form-item-error'
                            : 'signin-form-item '
                    }
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder="Enter password ..."
                    />
                    {formik.errors.password && formik.touched.password && (
                        <span className="signin-form-erorr">{formik.errors.password}</span>
                    )}
                </div>

                <div className="signin-form-item">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Practice4;
