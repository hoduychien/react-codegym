import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './medicalForm.scss';
import { useFormik } from 'formik';
import Validate from './Validate';

const MedicalForm = () => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [address, setAddress] = useState({});
    const host = 'https://provinces.open-api.vn/api/';

    useEffect(() => {
        const fetchProviceData = async () => {
            const resProvince = await axios.get(`${host}?depth=1`);
            const province = resProvince.data;
            setProvinces(province);
        };
        fetchProviceData();
    }, []);

    const onChangeLocation = async (event) => {
        console.log(event.target.label);
        const newAddress = { ...address };
        switch (event.target.name) {
            case 'province':
                const resDistrict = await axios.get(`${host}p/${event.target.value}?depth=2`);
                const district = resDistrict.data;
                setDistricts(district.districts);
                newAddress.province = event.target.value;

                break;
            case 'district':
                const resWard = await axios.get(`${host}d/${event.target.value}?depth=2`);
                console.log(event.target.value);
                const ward = resWard.data;
                setWards(ward.wards);
                newAddress.district = event.target.value;
                break;

            case 'ward':
                newAddress.ward = event.target.value;
                break;
            default:
                break;
        }
        setAddress(newAddress);
    };

    const formik = useFormik({
        initialValues: {
            fullname: '',
            passport: '',
            birthday: '',
            gender: 'male',
            nationality: '',
            company: '',
            position: '',
            insurance: false,
            address: address,
            phone: '',
            email: '',
            status: [],
        },
        validationSchema: Validate,

        handleChange: (e) => {
            console.log(e.target.value);
        },

        onSubmit: (values) => {
            values.address = address;
            console.log(values);
        },
    });

    return (
        <div className="container">
            <div className="medical">
                <div className="medical-heading">
                    <div className="medical-heading-title">THÔNG TIN KHAI BÁO Y TẾ</div>
                    <div className="medical-heading-sub">( PHÒNG CHỐNG DỊCH COVID-19 )</div>
                    <span className="medical-heading-desc">
                        Khuyến cáo: Khai báo thông tin sai là vi phạm pháp luật Việt Nam và có thể xử lý hình sự
                    </span>
                </div>

                <form className="medical-form" onSubmit={formik.handleSubmit}>
                    <div className="medical-form-control">
                        <label htmlFor="">Họ và tên</label>
                        <input
                            type="text"
                            placeholder="Ghi rỏ họ và tên ..."
                            name="fullname"
                            value={formik.values.fullname}
                            onChange={formik.handleChange}
                        />

                        {formik.errors.fullname && formik.touched.fullname && (
                            <span className="medical-form-error">{formik.errors.fullname}</span>
                        )}
                    </div>

                    <div className="medical-form-control">
                        <label htmlFor="">Số hộ chiếu / CMND / CCCD</label>
                        <input
                            type="text"
                            placeholder="Số hộ chiếu / CMND / CCCD ..."
                            name="passport"
                            value={formik.values.passport}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.passport && formik.touched.passport && (
                            <span className="medical-form-error">{formik.errors.passport}</span>
                        )}
                    </div>

                    <div className="medical-form-control">
                        <label htmlFor="">Năm sinh</label>
                        <input
                            type="text"
                            placeholder="yyyy"
                            name="birthday"
                            value={formik.values.birthday}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.birthday && formik.touched.birthday && (
                            <span className="medical-form-error">{formik.errors.birthday}</span>
                        )}
                    </div>

                    <div className="medical-form-control">
                        <label htmlFor="">Giới tính</label>
                        <select name="gender" onChange={formik.handleChange}>
                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                        </select>
                        <span className="medical-form-error"></span>
                    </div>

                    <div className="medical-form-control">
                        <label htmlFor="">Quốc tịch</label>
                        <input
                            type="text"
                            placeholder="Quốc tịch ..."
                            name="nationality"
                            value={formik.values.nationality}
                            onChange={formik.handleChange}
                        />

                        {formik.errors.nationality && formik.touched.nationality && (
                            <span className="medical-form-error">{formik.errors.nationality}</span>
                        )}
                    </div>
                    <div className="medical-form-control">
                        <label htmlFor="">Công ty làm việc</label>
                        <input
                            type="text"
                            placeholder="Công ty làm việc ..."
                            name="company"
                            value={formik.values.company}
                            onChange={formik.handleChange}
                        />
                        <span className="medical-form-error"></span>
                    </div>
                    <div className="medical-form-control">
                        <label htmlFor="">Bộ phận làm việc</label>
                        <input
                            type="text"
                            placeholder="Bộ phận làm việc ..."
                            name="position"
                            value={formik.values.position}
                            onChange={formik.handleChange}
                        />
                        <span className="medical-form-error"></span>
                    </div>
                    <div className="medical-form-control">
                        <label htmlFor="">
                            Thẻ bào hiểm y tế
                            <input
                                type="checkbox"
                                name="insurance"
                                value={formik.values.insurance}
                                onChange={formik.handleChange}
                            />
                        </label>
                    </div>

                    {/* <h5>Địa chỉ liên lạc hiện tại</h5> */}

                    <div className="medical-form-control">
                        <label htmlFor="">Tỉnh thành</label>
                        <select name="province" onChange={onChangeLocation} defaultValue={'default'}>
                            <option value={'default'} disabled hidden>
                                --- Chọn Tỉnh Thành ---
                            </option>

                            {provinces.map((province) => {
                                return (
                                    <option value={province.code} key={province.code}>
                                        {province.name}
                                    </option>
                                );
                            })}
                        </select>
                        {/* {formik.errors.address.province && formik.touched.address && (
                            <span className="medical-form-error">{formik.errors.address.province}</span>
                        )} */}
                    </div>

                    <div className="medical-form-control">
                        <label htmlFor="">Quận / Huyện</label>
                        <select name="district" onChange={onChangeLocation} defaultValue={'default'}>
                            <option value={'default'} disabled hidden>
                                --- Chọn Tỉnh Quận / Huyện ---
                            </option>
                            {districts.map((district) => {
                                return (
                                    <option value={district.code} key={district.code}>
                                        {district.name}
                                    </option>
                                );
                            })}
                        </select>
                        {/* {formik.errors.nationality && formik.touched.nationality && (
                            <span className="medical-form-error">{formik.errors.nationality}</span>
                        )} */}
                    </div>

                    <div className="medical-form-control">
                        <label htmlFor="">Phường / Xã</label>
                        <select name="ward" onChange={onChangeLocation} defaultValue={'default'}>
                            <option value={'default'} disabled hidden>
                                --- Chọn Tỉnh Phường / Xã ---
                            </option>
                            {wards.map((ward) => {
                                return (
                                    <option value={ward.code} key={ward.code}>
                                        {ward.name}
                                    </option>
                                );
                            })}
                        </select>
                        {/* {formik.errors.nationality && formik.touched.nationality && (
                            <span className="medical-form-error">{formik.errors.nationality}</span>
                        )} */}
                    </div>

                    <div className="medical-form-control">
                        <label htmlFor="">Số nhà, đường, phố, tổ dân phố/ thôn/ đội</label>
                        <textarea
                            name="street "
                            id=""
                            cols="30"
                            rows="4"
                            placeholder="Số nhà, đường, phố, tổ dân phố/ thôn/ đội ..."
                        ></textarea>
                        {/* {formik.errors.nationality && formik.touched.nationality && (
                            <span className="medical-form-error">{formik.errors.nationality}</span>
                        )} */}
                    </div>

                    <div className="medical-form-control">
                        <label htmlFor="">Điện thoại</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Số điện thoại ..."
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.phone && formik.touched.phone && (
                            <span className="medical-form-error">{formik.errors.phone}</span>
                        )}
                    </div>

                    <div className="medical-form-control">
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Địa chỉ email ..."
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.email && formik.touched.email && (
                            <span className="medical-form-error">{formik.errors.email}</span>
                        )}
                    </div>
                    <div className="medical-form-control">
                        <label htmlFor="">
                            Trong 14 ngày qua, Anh/ Chị có đến quốc gia vùng lảnh thổ nào(Có thể đi qua nhiều quốc gia)
                        </label>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="5"
                            placeholder="Trong 14 ngày qua, Anh/ Chị có đến quốc gia/ Vùng lảnh thổ nào(Có thể đi qua nhiều quốc gia) ..."
                        ></textarea>
                        <span className="medical-form-error"></span>
                    </div>
                    <div className="medical-form-control">
                        <label htmlFor="">Trong 14 ngày qua, Anh/ Chị có xuất hiện dấu hiệu nào sau đây không ?</label>
                        <label htmlFor="status1">
                            <input
                                type="checkbox"
                                name="status"
                                id="status1"
                                value="Sốt"
                                onChange={formik.handleChange}
                            />
                            Sốt
                        </label>
                        <label htmlFor="status2">
                            <input
                                type="checkbox"
                                name="status"
                                id="status2"
                                value="Ho"
                                onChange={formik.handleChange}
                            />
                            Ho
                        </label>
                        <label htmlFor="status3">
                            <input
                                type="checkbox"
                                name="status"
                                id="status3"
                                value="Khó thở"
                                onChange={formik.handleChange}
                            />
                            Khó thở
                        </label>
                        <label htmlFor="status4">
                            <input
                                type="checkbox"
                                name="status"
                                id="status4"
                                value="Viêm phổi"
                                onChange={formik.handleChange}
                            />
                            Viêm phổi
                        </label>
                        <label htmlFor="status5">
                            <input
                                type="checkbox"
                                name="status"
                                id="status5"
                                value="Đau họng"
                                onChange={formik.handleChange}
                            />
                            Đau họng
                        </label>
                        <label htmlFor="status6">
                            <input
                                type="checkbox"
                                name="status"
                                id="status6"
                                value="Mệt mỏi"
                                onChange={formik.handleChange}
                            />
                            Mệt mỏi
                        </label>
                    </div>

                    <div className="medical-form-control">
                        <label htmlFor="">Trong 14 ngày qua, Anh/ Chị tiếp xúc với ?</label>
                        <label htmlFor="status7">
                            <input
                                type="checkbox"
                                name="status"
                                id="status7"
                                value="Nghi nghờ"
                                onChange={formik.handleChange}
                            />
                            Người bệnh nghi ngờ, mắc bệnh COVID-19
                        </label>
                        <label htmlFor="status8">
                            <input
                                type="checkbox"
                                name="status"
                                id="status8"
                                value="trở về từ vùng dịch"
                                onChange={formik.handleChange}
                            />
                            Người trở về từ nước bệnh COVID-19
                        </label>
                        <label htmlFor="status9">
                            <input
                                type="checkbox"
                                name="status"
                                id="status9"
                                value="có biểu hiện"
                                onChange={formik.handleChange}
                            />
                            Người có biểu hiện (Số, ho, khó thở, viêm phôi)
                        </label>

                        <span className="medical-form-error"></span>
                    </div>

                    <div className="medical-form-action">
                        <button className="medical-form-button">Hủy tờ khai</button>
                        <button className="medical-form-button" type="submit">
                            Khai báo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MedicalForm;
