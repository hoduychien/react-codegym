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

const useFormatDate = () => {
    const formatTime = (time) => {
        let hours = new Date(time).getHours();
        let minutes = new Date(time).getMinutes();
        let day = new Date(time).getDate();
        let month = new Date(time).getMonth();
        let year = new Date(time).getFullYear();

        month = month < 10 ? '0' + (month + 1) : month + 1;
        day = day < 10 ? '0' + day : day;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        return `${year}-${month}-${day} ${hours}:${minutes}`;
    };

    return [formatTime];
};

const useCurrency = () => {
    const formatCurrency = (num) => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        return formatter.format(num);
    };

    return [formatCurrency];
};

export { useChangeMe, useClock, useCounter, useOpen, useFormatDate, useCurrency };
