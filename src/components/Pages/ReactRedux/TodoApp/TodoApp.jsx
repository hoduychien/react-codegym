import React from 'react';
import TodoCreate from './TodoCreate';
import TodoList from './TodoList';

const TodoApp = () => {
    return (
        <div className="container">
            <div className="title">[Thực hành] Xây dựng ứng dụng Todo List với Redux</div>
            <div className="content">
                <h4>Mục tiêu </h4>
                <ul>
                    <li>Hiểu và triển khai được react redux. </li>
                </ul>
                <h4>Mô tả bài toán</h4>
                <span>Xây dựng ứng dụng Todo list để quản lí danh sách những công việc cần làm.</span>
            </div>
            <div className="todo-app">
                <TodoCreate />
                <TodoList />
            </div>
        </div>
    );
};

export default TodoApp;
