import React, { useState } from 'react';
import { Modal } from '@mui/material';
import './createBook.scss';
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const CreateBook = (props) => {
    const formik = useFormik({
        initialValues: {
            title: '',
            author: '',
            price: '',
            quantity: '',
            date: '',
            status: 1,
            image: '',
            desc: '',
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .max(50, `Your first name must be under 50 characters !`)
                .required('You must fill in this section !'),

            author: Yup.string().required('You must fill in this section !'),
            price: Yup.string().required('You must fill in this section !'),
            quantity: Yup.string().required('You must fill in this section !'),
            desc: Yup.string().required('You must fill in this section !'),
        }),
        onSubmit: async (values) => {
            values.date = new Date().toLocaleTimeString();
            formik.resetForm();
            await props.setBookstoProps(values);
            props.handleOpen();
        },
    });
    return (
        <Modal
            open={props.open}
            onClose={props.handleOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="modal-create">
                <div className="modal-create-heading">
                    <h3 className="modal-create-heading-tittle">Create Book</h3>
                    <div className="modal-create-heading-toggle" onClick={props.handleOpen}>
                        <CloseIcon className="modal-create-heading-icon" />
                    </div>
                </div>

                <form className="modal-create-form" onSubmit={formik.handleSubmit}>
                    <div className="modal-create-form-item">
                        <label htmlFor="">Book Title</label>
                        <input
                            type="text"
                            placeholder="Enter book title ..."
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.title && formik.touched.title && (
                            <span className="contact-form-erorr">{formik.errors.title}</span>
                        )}
                    </div>
                    <div className="modal-create-form-item">
                        <label htmlFor="">Author</label>
                        <input
                            type="text"
                            placeholder="Enter author name ..."
                            name="author"
                            value={formik.values.author}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.author && formik.touched.author && (
                            <span className="contact-form-erorr">{formik.errors.author}</span>
                        )}
                    </div>

                    <div className="modal-create-form-item">
                        <label htmlFor="">Price</label>
                        <input
                            type="text"
                            placeholder="Enter price ..."
                            name="price"
                            value={formik.values.price}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.price && formik.touched.price && (
                            <span className="contact-form-erorr">{formik.errors.price}</span>
                        )}
                    </div>
                    <div className="modal-create-form-item">
                        <label htmlFor="">Quantity</label>
                        <input
                            type="text"
                            placeholder="Enter book title ..."
                            name="quantity"
                            value={formik.values.quantity}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.quantity && formik.touched.quantity && (
                            <span className="contact-form-erorr">{formik.errors.quantity}</span>
                        )}
                    </div>
                    <div className="modal-create-form-item">
                        <label htmlFor="">Status</label>

                        <select
                            name="status"
                            value={formik.values.status}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value={1}>Paid</option>
                            <option value={2}>Pending</option>
                            <option value={3}>Rejected</option>
                        </select>
                        {formik.errors.status && formik.touched.status && (
                            <span className="contact-form-erorr">{formik.errors.status}</span>
                        )}
                    </div>
                    <div className="modal-create-form-item">
                        <label htmlFor="">Cover thumbnails</label>
                        <input
                            type="file"
                            name="image"
                            value={formik.values.image}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className="modal-create-form-item">
                        <label htmlFor="">Description</label>
                        <textarea
                            id=""
                            cols="30"
                            rows="5"
                            name="desc"
                            value={formik.values.desc}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter description"
                        ></textarea>
                        {formik.errors.desc && formik.touched.desc && (
                            <span className="contact-form-erorr">{formik.errors.desc}</span>
                        )}
                    </div>
                    <div className="modal-create-form-item">
                        <div className="modal-create-form-button" onClick={(e) => formik.resetForm()}>
                            Cancel
                        </div>
                        <button className="modal-create-form-button " type="submit">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default CreateBook;
