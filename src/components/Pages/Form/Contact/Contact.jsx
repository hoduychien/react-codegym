import React, { useState } from 'react';
import './contact.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
    const nameMin = 3;
    const nameMax = 25;
    const phoneMin = 10;
    const [user, setUser] = useState([]);
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(nameMin, `Your first name must be as least ${nameMin} characters !`)
                .max(nameMax, `Your first name must be under ${nameMax} characters !`)
                .required('You must fill in this section !'),

            lastName: Yup.string()
                .min(nameMin, `Your last name must be as least ${nameMin} characters !`)
                .max(nameMax, `Your last name must be under ${nameMax} characters !`)
                .required('You must fill in this section !'),
            email: Yup.string().email('Invalid Email').required('You must fill in this section !'),
            phone: Yup.string()
                .min(phoneMin, `Your phone number must be as least ${phoneMin} characters !`)
                .required('You must fill in this section !'),
            address: Yup.string().required('You must fill in this section !'),
        }),
        onSubmit: (values) => {
            setUser([...user, values]);
            formik.resetForm();
        },
    });

    return (
        <div className="container">
            <div className="title">[Bài tập] Tạo form liên hệ</div>
            <div className="content">
                <h4>Mục tiêu </h4>
                <ul>
                    <li>Tạo được dự án React JS</li>
                    <li>Thao tác với state thông qua event</li>
                    <li>Thực hành validate form bằng Formik</li>
                </ul>
            </div>
            <div className="contact">
                <form className="contact-form" onSubmit={formik.handleSubmit}>
                    <div className="contact-form-item">
                        <div className="contact-form-title">Contact form</div>
                    </div>
                    <div
                        className={
                            formik.errors.firstName && formik.touched.firstName
                                ? 'contact-form-item contact-form-item-erorr'
                                : 'contact-form-item '
                        }
                    >
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Enter first name ..."
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.firstName && formik.touched.firstName && (
                            <span className="contact-form-erorr">{formik.errors.firstName}</span>
                        )}
                    </div>
                    <div
                        className={
                            formik.errors.lastName && formik.touched.lastName
                                ? 'contact-form-item contact-form-item-erorr'
                                : 'contact-form-item '
                        }
                    >
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Enter last name ..."
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                        {formik.errors.lastName && formik.touched.lastName && (
                            <span className="contact-form-erorr">{formik.errors.lastName}</span>
                        )}
                    </div>
                    <div
                        className={
                            formik.errors.email && formik.touched.email
                                ? 'contact-form-item contact-form-item-erorr'
                                : 'contact-form-item '
                        }
                    >
                        <label htmlFor="email">Email address</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter email address ..."
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.errors.email && formik.touched.email && (
                            <span className="contact-form-erorr">{formik.errors.email}</span>
                        )}
                    </div>
                    <div
                        className={
                            formik.errors.phone && formik.touched.phone
                                ? 'contact-form-item contact-form-item-erorr'
                                : 'contact-form-item '
                        }
                    >
                        <label htmlFor="phone">Phone number</label>
                        <input
                            type="number"
                            name="phone"
                            placeholder="Enter phone number ..."
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />
                        {formik.errors.phone && formik.touched.phone && (
                            <span className="contact-form-erorr">{formik.errors.phone}</span>
                        )}
                    </div>
                    <div
                        className={
                            formik.errors.address && formik.touched.address
                                ? 'contact-form-item contact-form-text contact-form-item-erorr'
                                : 'contact-form-item contact-form-text'
                        }
                    >
                        <label htmlFor="address">Address</label>

                        <textarea
                            name="address"
                            id=""
                            cols="10"
                            rows="4"
                            placeholder="Enter address ..."
                            onChange={formik.handleChange}
                            value={formik.values.address}
                        ></textarea>
                        {formik.errors.address && formik.touched.address && (
                            <span className="contact-form-erorr">{formik.errors.address}</span>
                        )}
                    </div>

                    {/* <div className="contact-form-alert alert alert-danger">dsad</div> */}
                    <div className="contact-form-action">
                        <div className="contact-form-button btn btn-light" onClick={(e) => formik.resetForm()}>
                            Cancel
                        </div>
                        <button className="contact-form-button btn btn-primary" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            <table className="manager-table">
                <thead>
                    <tr>
                        <td>No.</td>
                        <td>Fullname</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Address</td>
                    </tr>
                </thead>

                <tbody>
                    {user.map((user, index) => {
                        return (
                            <tr key={user.email}>
                                <td>{index + 1}</td>
                                <td>
                                    {user.firstName} {user.lastName}
                                </td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.address}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Contact;
