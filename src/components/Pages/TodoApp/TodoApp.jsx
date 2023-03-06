import React, { useState } from 'react';
import './todoApp.scss';
const TodoApp = () => {
    const [task, setTask] = useState({});
    const [list, setList] = useState([]);
    const [erorr, setErorr] = useState(false);

    const handleOnchangeInput = (e) => {
        let taskCopy = { ...task };
        taskCopy[e.target.name] = e.target.value;
        setTask(taskCopy);
    };

    const handleCreateTask = () => {
        if (task.content.length === 0) {
            setErorr(true);
            return;
        }
        setList([...list, task]);
        setTask({
            content: '',
        });
        setErorr(false);
    };

    const handleClearAllTask = () => {
        setList([]);
    };

    const handleDeleteTask = (task) => {
        let arr = list.filter((value) => value !== task);
        setList(arr);
    };

    return (
        <div className="container">
            <div className="title">[Bài tập] Ứng dụng quản lý công việc (Todo App)</div>
            <div className="content">
                <h4>Mục tiêu </h4>
                <ul>
                    <li>Tạo được dự án React JS</li>
                    <li>Thao tác với state thông qua event </li>
                </ul>
                <h4>Mô tả bài toán</h4>
                <span>
                    Viết chương trình Todo App <br />
                </span>
                <span>Ứng dụng có:</span>
                <ul>
                    <li>Tạo được dự án React JS</li>
                    <li>Thao tác với state thông qua event </li>
                </ul>
                <p>
                    Chức năng: Người dùng thực hiện gõ tên công việc cần làm vào textfield. Ấn “Add” để thêm công việc
                    vào danh sách.
                </p>
            </div>

            <div className="todo-app">
                <div className="todo-app-title">Todo App</div>
                {erorr && <div className="todo-app-erorr">Missing information !!!</div>}
                <div className={erorr ? 'todo-app-input  todo-app-input-erorr' : 'todo-app-input'}>
                    <input
                        type="text"
                        placeholder="Add your new todo"
                        name="content"
                        onChange={(e) => handleOnchangeInput(e)}
                        value={task.content}
                    />
                    <div
                        className="todo-app-button"
                        onClick={() => {
                            handleCreateTask();
                        }}
                    >
                        Add
                    </div>
                </div>
                <div className="todo-app-list">
                    {list
                        .map((item, index) => {
                            return (
                                <div
                                    className="todo-app-item"
                                    key={index}
                                    onClick={() => {
                                        handleDeleteTask(item);
                                    }}
                                >
                                    <p>{item.content}</p>
                                </div>
                            );
                        })
                        .reverse()}
                </div>

                <div className="todo-app-footer">
                    <p>You have {list.length} pending tasks</p>
                    <div
                        className="todo-app-button"
                        onClick={() => {
                            handleClearAllTask();
                        }}
                    >
                        Clear all
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
