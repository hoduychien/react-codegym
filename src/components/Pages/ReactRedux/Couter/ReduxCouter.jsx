import React from 'react';
import CountAction from './CountAction';
import CountView from './CountView';

const ReduxCouter = () => {
    return (
        <div className="container">
            <CountAction />
            <CountView />
        </div>
    );
};

export default ReduxCouter;
