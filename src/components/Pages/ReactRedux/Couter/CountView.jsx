import React from 'react';
import { useSelector } from 'react-redux';

const CountView = () => {
    const countReducer = useSelector((state) => state.countReducer);
    return <div>{countReducer.initialNumber}</div>;
};

export default CountView;
