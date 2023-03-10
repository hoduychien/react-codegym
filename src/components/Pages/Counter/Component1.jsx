import React from 'react';
import { useCounter } from '../hooks';

const Component1 = () => {
    const [count, countUp] = useCounter(1);
    return (
        <>
            <div style={{ fontSize: '20px', fontWeight: '500' }}>{count}</div>
            <button className="btn btn-primary" onClick={() => countUp(1)}>
                Add
            </button>
        </>
    );
};

export default Component1;
