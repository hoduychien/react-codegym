import React, { useEffect, useState } from 'react';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import avatar from '../../../../assets/img/default-avatar.jpg';

const ContactDetail = () => {
    const [fixButton, setFixButton] = useState(false);
    const { state } = useLocation();
    const [contact, setContact] = useState(state);
    const navigate = useNavigate();

    const getContact = async () => {
        const response = await axios.get(`http://localhost:3004/contacts/${state.id}`);
        const data = await response.data;
        if (data.statusCode === 200) {
            setContact(data.body);
        }
    };

    const handleDeleteContact = async () => {
        if (window.confirm(`Xóa liên hệ với ${contact.name}`)) {
            if (state.id !== 1) {
                const response = await axios.delete(`http://localhost:3004/contacts/${state.id}`);
                const data = response.data;

                if (response && data.statusCode === 200) {
                    navigate('/manage-contacts', { state: `Delete ${state.name} successfully` });
                }
            }
        }
    };

    const formik = useFormik({
        initialValues: {
            phone: contact.phone,
            email: contact.email,
            address: contact.address,
            desc: contact.desc,
            name: contact.name,
            avatar: contact.avatar,
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            phone: Yup.string()
                .matches(/^[0-9]{10}$/, 'Số điện thoại chưa đúng định dạng !')
                .required('Số điện thoại không được để trống !'),
            email: Yup.string().email('Email chưa đúng định dạng !').required('Email không được để trống'),
        }),

        onSubmit: async (values) => {
            if (window.confirm(`Cập nhật thông tin liên hệ ${contact.name}`)) {
                await axios.put(`http://localhost:3004/contacts/${state.id}`, values);

                toast.success('Wow so easy!', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
                setFixButton(false);
                getContact();
            } else {
                setFixButton(!fixButton);
                formik.resetForm();
            }
        },
    });

    useEffect(() => {
        getContact();
    }, []);
    return (
        <form className="contacts" onSubmit={formik.handleSubmit}>
            <ToastContainer />
            <div className="contacts-header white-background">
                <div className="contacts-header-heading">
                    {!fixButton ? (
                        <div className="contacts-header-link" onClick={() => navigate('/manage-contacts')}>
                            <KeyboardArrowLeftRoundedIcon />
                            <span>Liên hệ</span>
                        </div>
                    ) : (
                        <div className="contacts-header-link" onClick={() => setFixButton(!fixButton)}>
                            <span>Hủy</span>
                        </div>
                    )}
                    {fixButton ? (
                        <button className="contacts-header-link" type="submit">
                            Xong
                        </button>
                    ) : (
                        <div className="contacts-header-link" onClick={() => setFixButton(true)}>
                            Sửa
                        </div>
                    )}
                </div>
                <div className="contacts-detail-header">
                    <div className="contacts-detail-avatar">
                        <img src={contact.avatar ? contact.avatar : avatar} alt="" />
                    </div>

                    <input
                        disabled={!fixButton}
                        className="contacts-detail-name"
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    <div className="contacts-detail-actions">
                        <div className="contacts-detail-actions-item">
                            <div className="contacts-detail-button">
                                <ChatBubbleRoundedIcon className="contacts-detail-icon" />
                            </div>
                            <span>Nhắn tin</span>
                        </div>
                        <div className="contacts-detail-actions-item">
                            <div className="contacts-detail-button">
                                <LocalPhoneRoundedIcon className="contacts-detail-icon" />
                            </div>
                            <span>Gọi</span>
                        </div>
                        <div className="contacts-detail-actions-item">
                            <div className="contacts-detail-button">
                                <VideocamRoundedIcon className="contacts-detail-icon" />
                            </div>
                            <span>Zalo</span>
                        </div>
                        <div className="contacts-detail-actions-item">
                            <div className="contacts-detail-button">
                                <EmailRoundedIcon className="contacts-detail-icon" />
                            </div>
                            <span>Gửi thư</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contacts-detail-info">
                <div className="contacts-detail-item">
                    {formik.errors.phone && formik.touched.phone ? (
                        <div className="contacts-detail-error">{formik.errors.phone}</div>
                    ) : (
                        <span>Điện thoại</span>
                    )}
                    <input
                        disabled={!fixButton}
                        type="text"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="contacts-detail-item">
                    {formik.errors.email && formik.touched.email ? (
                        <div className="contacts-detail-error">{formik.errors.email}</div>
                    ) : (
                        <span>Email</span>
                    )}
                    <input
                        disabled={!fixButton}
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="contacts-detail-item">
                    <span>Ghi chú</span>
                    <textarea
                        disabled={!fixButton}
                        name="desc"
                        id=""
                        cols="30"
                        rows="2"
                        value={formik.values.desc}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></textarea>
                </div>
                <div className="contacts-detail-item">
                    <span>Địa chỉ</span>
                    <textarea
                        disabled={!fixButton}
                        name="address"
                        id=""
                        cols="30"
                        rows="2"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></textarea>
                </div>

                <div className="contacts-detail-action">
                    <span>Gửi tin nhắn</span>
                </div>
                <div className="contacts-detail-action">
                    <span>Chĩa sẽ liên hệ</span>
                </div>
                <div className="contacts-detail-action">
                    <span>Thêm vào mục ưa thích</span>
                </div>
                {state.id !== 1 && (
                    <div
                        className="contacts-detail-action contacts-detail-action-delete"
                        onClick={() => handleDeleteContact()}
                    >
                        <span>Xóa liên hệ</span>
                    </div>
                )}
            </div>
        </form>
    );
};

export default ContactDetail;
