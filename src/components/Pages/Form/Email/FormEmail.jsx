import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './formEmail.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormEmail = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
            email: '',
            message: '',
            file: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('You must fill in this section !'),
            email: Yup.string().email('Invalid Email').required('You must fill in this section !'),
            message: Yup.string().required('You must fill in this section !'),
        }),
        onSubmit: (values) => {
            formik.resetForm();
            alert('Sent successfully!!!');
        },
    });

    return (
        <div className="container">
            <div className="title">[Bài tập] Tạo form soạn thảo Email (with validate/upload attachments)</div>
            <div className="content">
                <h4>Mục tiêu </h4>
                <ul>
                    <li>Tạo được dự án React JS</li>
                    <li>Thao tác với state thông qua event </li>
                    <li>Thực hành với cơ chế condition rendering </li>
                    <li>Thực hành validate form bằng Formik </li>
                </ul>
                <h4>Mô tả bài toán</h4>
                <div>Viết chương trình cho phép soạn thảo và gửi mail</div>
            </div>
            <form className="form-email" onSubmit={formik.handleSubmit}>
                <div className="form-email-heading">
                    <div className="form-email-title">New Email</div>
                    <div className="form-email-toggle">
                        <CloseIcon className="form-email-toggle-icon" />
                    </div>
                </div>
                <div className="form-email-control">
                    <label htmlFor="">To</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter email address ..."
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />

                    {formik.errors.email && formik.touched.email && (
                        <span className="form-email-error">{formik.errors.email}</span>
                    )}
                </div>

                <div className="form-email-control">
                    <label htmlFor="">Title</label>
                    <input
                        name="title"
                        type="text"
                        placeholder="Enter Title ..."
                        value={formik.values.title}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.title && formik.touched.title && (
                        <span className="form-email-error">{formik.errors.title}</span>
                    )}
                </div>

                <div className="form-email-control">
                    <label htmlFor="">Message</label>
                    <textarea
                        name="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        cols="30"
                        rows="5"
                        placeholder="Enter Message here ..."
                    ></textarea>
                    {formik.errors.message && formik.touched.message && (
                        <span className="form-email-error">{formik.errors.message}</span>
                    )}
                </div>

                <div className="form-email-control">
                    <label htmlFor="">File</label>
                    <input type="file" name="file" value={formik.values.file} onChange={formik.handleChange} />
                </div>
                <div className="form-email-action">
                    <div className="form-email-button">Cancel</div>
                    <button className="form-email-button" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormEmail;
