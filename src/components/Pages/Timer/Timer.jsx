import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [time, setTime] = useState(10);
    useEffect(() => {
        if (time < 1) {
            alert(`Time's up`);
            return;
        }
        const funInterval = setInterval(() => {
            setTime(time - 1);
        }, 1000);

        return () => {
            clearInterval(funInterval);
        };
    }, [time]);
    return (
        <div className="container">
            <div className="title">[Bài tập] Xây dựng Component Timer</div>
            <div className="content">
                <h4>Mục tiêu </h4>
                <ul>
                    <li>Hiểu và sử dụng được useEffect</li>
                </ul>
                <h4>Mô tả bài toán</h4>
                <span>
                    Xây dựng component Timer có tính năng tự động đếm ngược từ 10 về 0 (theo đơn vị giây). <br />
                </span>
            </div>

            <div style={{ fontSize: '20px', fontWeight: '500' }}>{time}</div>
        </div>
    );
};

export default Timer;
