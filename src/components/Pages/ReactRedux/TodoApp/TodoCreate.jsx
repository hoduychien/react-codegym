import React from 'react';
import { useDispatch } from 'react-redux';
import { ACTION_TYPES } from '../../../../constants/actionTypes';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v1 as uuidv1 } from 'uuid';

const TodoCreate = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            text: '',
        },
        validationSchema: Yup.object({
            text: Yup.string().required('Title is required'),
        }),
        onSubmit: (values) => {
            const data = {
                ...values,
                id: uuidv1(),
            };
            dispatch({ type: ACTION_TYPES.CREATETODO, payload: data });
            formik.resetForm();
        },
    });
    return (
        <div>
            <div className="todo-app-title">Todo App</div>
            <form className="todo-app-input" onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    placeholder="Add your new todo"
                    name="text"
                    value={formik.values.text}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <button type="submit" className="todo-app-button">
                    Create
                </button>
            </form>
        </div>
    );
};

export default TodoCreate;
