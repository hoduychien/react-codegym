import React from 'react';
import { useDispatch } from 'react-redux';
import { ACTION_TYPES } from '../../../../constants/actionTypes';

const CountAction = () => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({ type: ACTION_TYPES.INCREMENT, payload: 1 });
    };

    const handleDecrement = () => {
        dispatch({ type: ACTION_TYPES.DECREMENT, payload: 1 });
    };
    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default CountAction;
