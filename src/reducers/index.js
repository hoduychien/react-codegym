import { combineReducers } from 'redux';
import countReducer from './countReducer';
import todoReducer from './todoReducer';
import loginReducer from './loginReducer';
import productReducer from './productReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
    countReducer,
    todoReducer,
    loginReducer,
    productReducer,
    postReducer,
});

export default rootReducer;
