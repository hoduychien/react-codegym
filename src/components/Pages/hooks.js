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

const useCounter = (num) => {
    const [count, setCount] = useState(num);

    const countUp = (num) => {
        setCount(count + num);
    };

    return [count, countUp];
};

const useOpen = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };
    return [isOpen, handleOpen];
};
export { useChangeMe, useClock, useCounter, useOpen };
