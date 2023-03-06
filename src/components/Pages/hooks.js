import { useState } from 'react';

const useChangeMe = (state) => {
    const [name, setName] = useState(state);

    const changeMe = (name) => {
        setName(name);
    };
    return [name, changeMe];
};

const useClock = () => {
    const [time, setTime] = useState();
    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    });

    return [time];
};

const useCounter = () => {
    const [count, setCount] = useState(0);

    const countUp = () => {
        setCount(count + 1);
    };

    return [count, countUp];
};
export { useChangeMe, useClock, useCounter };
