import * as Yup from 'yup';
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const Validate = Yup.object({
    fullname: Yup.string().required('Họ tên không được để trống'),
    passport: Yup.string().required('Số hộ chiếu/ CMND / CCCD không được để trống'),
    birthday: Yup.string().required('Năm sinh không được để trống'),
    nationality: Yup.string().required('Quốc tịch không được để trống'),
    phone: Yup.string().required('Số điện thoại n không được để trống'),
    email: Yup.string()
        .required('Email không được để trống')
        .test('', 'Không đúng định dạng email', (value, context) => emailRegex.test(value)),
});

export default Validate;
