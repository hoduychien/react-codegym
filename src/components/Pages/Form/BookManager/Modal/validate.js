import * as Yup from 'yup';

const validate = Yup.object({
    title: Yup.string()
        .max(50, `Your first name must be under 50 characters !`)
        .required('You must fill in this section !'),

    author: Yup.string().required('You must fill in this section !'),
    price: Yup.string().required('You must fill in this section !'),
    quantity: Yup.string().required('You must fill in this section !'),
    desc: Yup.string().required('You must fill in this section !'),
});

export default validate;
