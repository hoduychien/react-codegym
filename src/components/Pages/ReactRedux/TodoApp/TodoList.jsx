import React from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { ACTION_TYPES } from '../../../../constants/actionTypes';

const TodoList = () => {
    const dispatch = useDispatch();

    const TodoReducer = useSelector((state) => state.todoReducer);

    const handleDeleteTodo = (id) => {
        dispatch({ type: ACTION_TYPES.DELETETODO, payload: { id: id } });
    };
    return (
        <div className="todo-app-list">
            {TodoReducer.map((todo) => {
                return (
                    <div className="todo-app-item" key={todo.id}>
                        <div className="todo-app-item-title">{todo.text}</div>
                        <div className="todo-app-item-button" onClick={() => handleDeleteTodo(todo.id)}>
                            <button>
                                <DeleteOutlineOutlinedIcon className="todo-app-item-icon" />
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                );
            }).reverse()}
        </div>
    );
};

export default TodoList;
