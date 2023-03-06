import React from 'react';
import { useCounter } from '../hooks';

const Component2 = () => {
    const [count, countUp] = useCounter();

    return (
        <>
            <div style={{ fontSize: '20px', fontWeight: '500' }}>{count}</div>
            <button className="btn btn-primary" onClick={countUp}>
                Add
            </button>
        </>
    );
};

export default Component2;
