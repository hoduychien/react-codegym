import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
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

    const formatTime = (time) => {
        let hours = new Date(time).getHours();
        let minutes = new Date(time).getMinutes();
        let day = new Date(time).getDate();
        let month = new Date(time).getMonth();

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        return `⏱️ ${hours} : ${minutes} - ${day}/${month}`;
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
            <div className="title">[Bài tập] Ứng dụng quản lý công việc (Todo App)</div>
            <div className="content">
                <h4>Mục tiêu </h4>

                <span>Ứng dụng có:</span>
                <ul>
                    <li>Title “Todo List”</li>
                    <li>Input để nhập todo task</li>
                    <li>Button “Submit”</li>
                    <li>Danh sách todo</li>
                    <li>Khi người dùng truy cập http://localhost:3000, hiển thị danh sách todo từ api</li>
                    <li>
                        Khi người dùng điền todo task và click “Submit”
                        <ul>
                            <li>Thực hiện gọi post api</li>
                            <li>Hiển thị alert thông báo status của response</li>
                        </ul>
                    </li>
                </ul>
            </div>

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
