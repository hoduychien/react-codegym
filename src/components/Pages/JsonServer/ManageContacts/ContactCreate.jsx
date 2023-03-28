import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import avatar from '../../../../assets/img/default-avatar.jpg';
import CommonUtils from './CommonUtils';
import { useFormik } from 'formik';

const ContactLists = () => {
    const [previewImage, setPreviewImage] = useState();
    const [avatarBase64, setAvatarBase64] = useState(avatar);
    const navigate = useNavigate();

    const handleOnchangeImage = async (event) => {
        const data = event.target.files;
        const file = data[0];

        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            let url = URL.createObjectURL(file);

            setPreviewImage(url);
            setAvatarBase64(base64.currentTarget.result);
        }
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            address: '',
            phone: '',
            desc: '',
        },
        enableReinitialize: true,
        onSubmit: async (values) => {
            const data = {
                ...values,
                avatar: avatarBase64,
            };
            const response = await axios.post('http://localhost:3004/contacts', data);
            if (response.data.statusCode === 201) {
                navigate('/manage-contacts');
            }
        },
    });

    return (
        <form className="contacts" onSubmit={formik.handleSubmit}>
            <ToastContainer />
            <div className="contacts-header white-background">
                <div className="contacts-header-heading">
                    <div className="contacts-header-link" onClick={() => navigate('/manage-contacts')}>
                        <span>Hủy</span>
                    </div>
                    <div className="contacts-header-title">Liên hệ mới</div>

                    <button type="submit" className="contacts-header-link">
                        Xong
                    </button>
                </div>
            </div>

            <div className="contacts-form">
                <div className="contacts-form-center">
                    <input type="file" id="avatar" accept="image/*" onChange={(event) => handleOnchangeImage(event)} />
                    <label htmlFor="avatar">
                        <img src={previewImage ? previewImage : avatar} alt="" />
                    </label>
                    <label htmlFor="avatar">
                        <span>Thêm ảnh</span>
                    </label>
                </div>
                <div className="contacts-form-input">
                    <label htmlFor="name">
                        <span>Họ tên</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Nhập tên ..."
                        name="name"
                        id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="contacts-form-input">
                    <label htmlFor="phone">
                        <span>Số điện thoại</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Nhập số điện thoại ..."
                        name="phone"
                        id="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="contacts-form-input">
                    <label htmlFor="email">
                        <span>Email</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Nhập địa chỉ email ..."
                        name="email"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="contacts-form-input">
                    <label htmlFor="address">
                        <span>Địa chỉ</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Nhập địa chỉ ..."
                        name="address"
                        cols="30"
                        rows="3"
                        id="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="contacts-form-input">
                    <label htmlFor="desc">
                        <span>Ghi chú</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Nhập ghi chú ..."
                        name="desc"
                        id="desc"
                        cols="30"
                        rows="3"
                        value={formik.values.desc}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></textarea>
                </div>
            </div>
        </form>
    );
};

export default ContactLists;
