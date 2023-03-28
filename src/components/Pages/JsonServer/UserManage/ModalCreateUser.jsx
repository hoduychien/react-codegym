import React, { useEffect, useState } from 'react';
import { Modal } from '@mui/material';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MaleOutlinedIcon from '@mui/icons-material/MaleOutlined';
import FemaleOutlinedIcon from '@mui/icons-material/FemaleOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './modalCreate.scss';
import avatar from '../../../../assets/img/default-avatar.jpg';
import CommonUtils from '../ManageContacts/CommonUtils';

const ModalCreateUser = (props) => {
    const [data, setData] = useState({});
    const [previewImage, setPreviewImage] = useState();
    const [avatarBase64, setAvatarBase64] = useState();
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
            avatar: '',
            email: '',
            status: 2,
            gender: 1,
            phone: '',
            address: '',
            password: '',
            role: 2,
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(50, `Your name must be under 50 characters !`)
                .required('You must fill in this section !'),

            email: Yup.string().email('Wrong email format !').required('You must fill in this section !'),
            phone: Yup.string()
                .required('You must fill in this section !')
                .max(50, `Your name must be under 50 characters !`)
                .required('You must fill in this section !'),
            address: Yup.string().required('You must fill in this section !'),
        }),

        onSubmit: async (values) => {
            const data = {
                ...values,
                avatar: avatarBase64,
            };
            props.createUser(data);
            formik.resetForm();
            props.handleOpen();
        },
    });

    useEffect(() => {
        setData(formik.values);
    }, [formik.values]);

    return (
        <Modal
            open={props.open}
            onClose={props.handleOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <form className="modal-users" onSubmit={formik.handleSubmit}>
                <div className="modal-users-heading">
                    <div className="modal-users-heading-avatar">
                        <input
                            type="file"
                            id="avatar"
                            accept="image/*"
                            onChange={(event) => handleOnchangeImage(event)}
                        />

                        <img src={previewImage ? previewImage : avatar} alt="" />
                        <label htmlFor="avatar" className="modal-users-heading-camera">
                            <CameraAltRoundedIcon className="modal-users-heading-icon" />
                        </label>
                    </div>

                    <div className="modal-users-info">
                        <div>
                            <div className="modal-users-info-name">{data.name ? data.name : 'Fullname'}</div>
                            <div className="modal-users-info-item">
                                <AlternateEmailRoundedIcon className="modal-users-info-icon" />
                                <span>{data.email ? data.email : 'Email address'}</span>
                            </div>
                            <div className="modal-users-info-item">
                                <LocationOnOutlinedIcon className="modal-users-info-icon" />
                                <span>{data.address ? data.address : 'Address'}</span>
                            </div>
                            <div className="modal-users-info-item">
                                <LocalPhoneOutlinedIcon className="modal-users-info-icon" />
                                <span>{data.phone ? data.phone : 'Phone Number'}</span>
                            </div>
                        </div>
                        <div>
                            <div className="modal-users-info-item">
                                {data.gender === 1 ? (
                                    <MaleOutlinedIcon className="modal-users-info-icon" />
                                ) : (
                                    <FemaleOutlinedIcon className="modal-users-info-icon" />
                                )}
                                <span>{data.gender === 1 ? 'Gender - Male' : 'Gender - Female'}</span>
                            </div>
                            <div className="modal-users-info-item">
                                <BadgeOutlinedIcon className="modal-users-info-icon" />
                                <span>
                                    {data.role == 1 ? 'Role - Admin' : data.role == 2 ? 'Role - User' : 'Role - None'}
                                </span>
                            </div>
                            <div className="modal-users-info-item">
                                {data.status == 1 ? (
                                    <ToggleOnOutlinedIcon className="modal-users-info-icon" />
                                ) : (
                                    <ToggleOffOutlinedIcon className="modal-users-info-icon" />
                                )}
                                <span>{data.status == 1 ? 'Active' : 'Inactive'}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal-users-form">
                    <div className="modal-users-form-item">
                        <label htmlFor="">Fullname</label>
                        <input
                            type="text"
                            placeholder="Enter fullname ..."
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.name && formik.touched.name && (
                            <span className="contact-form-erorr">{formik.errors.name}</span>
                        )}
                    </div>
                    <div className="modal-users-form-group">
                        <div className="modal-users-form-item">
                            <label htmlFor="">Email</label>
                            <input
                                type="text"
                                placeholder="Enter email address ..."
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.email && formik.touched.email && (
                                <span className="contact-form-erorr">{formik.errors.email}</span>
                            )}
                        </div>
                        <div className="modal-users-form-item">
                            <label htmlFor="">Phone</label>
                            <input
                                type="text"
                                placeholder="Enter phone number ..."
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                            {formik.errors.phone && formik.touched.phone && (
                                <span className="contact-form-erorr">{formik.errors.phone}</span>
                            )}
                        </div>
                    </div>

                    <div className="modal-users-form-group">
                        <div className="modal-users-form-item">
                            <label htmlFor="">Status</label>

                            <select
                                name="status"
                                value={formik.values.status}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value={1}>Active</option>
                                <option value={2}>Inactive</option>
                            </select>
                            <KeyboardArrowDownRoundedIcon className="modal-users-form-item-toggle" />
                        </div>
                        <div className="modal-users-form-item">
                            <label htmlFor="">Gender</label>

                            <select
                                name="gender"
                                value={formik.values.gender}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value={1}>Male</option>
                                <option value={2}>Female</option>
                            </select>
                            <KeyboardArrowDownRoundedIcon className="modal-users-form-item-toggle" />
                        </div>

                        <div className="modal-users-form-item">
                            <label htmlFor="">Role</label>
                            <select
                                name="role"
                                value={formik.values.role}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value={1}>Admin</option>
                                <option value={2}>User</option>
                            </select>
                            <KeyboardArrowDownRoundedIcon className="modal-users-form-item-toggle" />
                        </div>
                    </div>
                    <div className="modal-users-form-item">
                        <label htmlFor="">Address</label>
                        <textarea
                            type="text"
                            placeholder="Enter address ..."
                            cols={30}
                            rows={4}
                            name="address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        ></textarea>
                        {formik.errors.address && formik.touched.address && (
                            <span className="contact-form-erorr">{formik.errors.address}</span>
                        )}
                    </div>
                </div>

                <div className="modal-users-form-action">
                    <div className="modal-users-form-button" onClick={(e) => formik.resetForm()}>
                        Cancel
                    </div>
                    <button className="modal-users-form-button " type="submit">
                        Create
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default ModalCreateUser;
