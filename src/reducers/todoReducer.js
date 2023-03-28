import { ACTION_TYPES } from '../constants/actionTypes';
const initialState = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Learn Redux' },
    { id: 3, text: 'Build something fun!' },
];

const todoReducer = (state = initialState, action) => {
    if (action.type === ACTION_TYPES.CREATETODO) {
        return [
            ...state,
            {
                id: action.payload.id,
                text: action.payload.text,
            },
        ];
    }
    if (action.type === ACTION_TYPES.DELETETODO) {
        return state.filter((todo) => todo.id !== action.payload.id);
    }

    return state;
};

export default todoReducer;
