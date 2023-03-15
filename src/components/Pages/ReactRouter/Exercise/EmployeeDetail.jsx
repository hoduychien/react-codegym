import React from 'react';
import { useLocation } from 'react-router-dom';

const EmployeeDetail = () => {
    const { state } = useLocation();

    return (
        <div className="emplyeeDetail">
            <div>
                <span>Name:</span> {state.name}
            </div>
            <div>
                <span>Age</span> {state.age}
            </div>
        </div>
    );
};

export default EmployeeDetail;
