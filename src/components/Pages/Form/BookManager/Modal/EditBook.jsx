import React, { useState } from 'react';
import { Modal } from '@mui/material';
import './createBook.scss';
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import validate from './validate';

const EditBook = (props) => {
    const [bookEdit, setBookEdit] = useState({});
    const formik = useFormik({
        initialValues: {
            title: props.bookEdit.title,
            author: props.bookEdit.author,
            price: props.bookEdit.price,
            quantity: props.bookEdit.quantity,
            date: props.bookEdit.date,
            status: props.bookEdit.status,
            image: props.bookEdit.image,
            desc: props.bookEdit.desc,
        },
        validationSchema: validate,
        onSubmit: async (values) => {
            values.date = new Date().toLocaleTimeString();
            setBookEdit(values);
            await props.updateBook(values);
            props.openEditModal();
        },
    });

    return (
        <Modal
            open={props.isOpenEditModal}
            onClose={props.openEditModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="modal-create">
                <div className="modal-create-heading">
                    <h3 className="modal-create-heading-tittle">Update Book : {props.bookEdit.title}</h3>
                    <div className="modal-create-heading-toggle" onClick={props.openEditModal}>
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
                            disabled
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
                            onChange={formik.handleChange}
                        />
                        {formik.errors.quantity && formik.touched.quantity && (
                            <span className="contact-form-erorr">{formik.errors.quantity}</span>
                        )}
                    </div>
                    <div className="modal-create-form-item">
                        <label htmlFor="">Status</label>
                        <select name="status" value={formik.values.status} onChange={formik.handleChange}>
                            <option value="1">Paid</option>
                            <option value="2">Pending</option>
                            <option value="3">Rejected</option>
                        </select>
                        {formik.errors.status && formik.touched.status && (
                            <span className="contact-form-erorr">{formik.errors.status}</span>
                        )}
                    </div>
                    <div className="modal-create-form-item">
                        <label htmlFor="">Cover thumbnails</label>
                        <input type="file" name="image" value={formik.values.image} onChange={formik.handleChange} />
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
                            placeholder="Enter description"
                        ></textarea>
                        {formik.errors.desc && formik.touched.desc && (
                            <span className="contact-form-erorr">{formik.errors.desc}</span>
                        )}
                    </div>
                    <div className="modal-create-form-item">
                        <div className="modal-create-form-button" onClick={props.openEditModal}>
                            Cancel
                        </div>
                        <button className="modal-create-form-button " type="submit">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default EditBook;
