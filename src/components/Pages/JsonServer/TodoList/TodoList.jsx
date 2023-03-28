import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormatDate } from '../../hooks';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [formatTime] = useFormatDate();
    const getTodoList = async () => {
        const response = await axios.get('http://localhost:3004/todos');
        const data = await response.data;
        if (data.statusCode === 200) {
            setTodos(data.body);
        }
    };
    useEffect(() => {
        getTodoList();
    }, []);

    const handleDeleteTode = async (id) => {
        const response = await axios.delete(`http://localhost:3004/todos/${id}`);
        const data = await response.data;
        if (data.statusCode === 200) {
            getTodoList();
        }
    };

    const handleDeleteAllTodos = () => {};

    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is required'),
        }),
        onSubmit: async (values) => {
            const response = await axios.post('http://localhost:3004/todos', values);
            const data = await response.data;
            if (data.statusCode === 201) {
                setTodos([...todos, data.body]);
                formik.resetForm();
                toast.success('Create todo success ~', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            }
        },
    });
    return (
        <div className="container">
            <ToastContainer />

            <div className="todo-app">
                <div className="todo-app-title">Todo App</div>
                {formik.errors.title && formik.touched.title && (
                    <div className="todo-app-erorr">{formik.errors.title}</div>
                )}

                <form
                    className={
                        formik.errors.title && formik.touched.title
                            ? 'todo-app-input todo-app-input-erorr'
                            : 'todo-app-input'
                    }
                    onSubmit={formik.handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Add your new todo"
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <button type="submit" className="todo-app-button">
                        Create
                    </button>
                </form>
                <div className="todo-app-list">
                    {todos
                        .map((todo, index) => {
                            return (
                                <div className="todo-app-item" key={index}>
                                    <div className="todo-app-item-title">{todo.title}</div>
                                    <div className="todo-app-item-time">{formatTime(todo.createdAt)}</div>
                                    <div className="todo-app-item-button">
                                        <button onClick={() => handleDeleteTode(todo.id)}>
                                            <DeleteOutlineOutlinedIcon className="todo-app-item-icon" />
                                            <span>Delete</span>
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                        .reverse()}
                </div>

                <div className="todo-app-footer">
                    <p>You have {todos.length} pending tasks</p>
                    <div className="todo-app-button" onClick={handleDeleteAllTodos}>
                        Clear all
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
