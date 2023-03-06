import React, { useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './paractice1.scss';
const Paractice1 = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="container">
            <div className="title">[Thực hành] Triển khai useState</div>
            <div className="content">
                <h4>Mục tiêu </h4>
                <ul>
                    <li>Hiểu và sử dụng được useState</li>
                </ul>
                <h4>Mô tả bài toán</h4>
                <span>
                    Xây dựng component Counter. Sử dụng hooks useState để tăng giá trị của biến count sau mỗi lần nhấn
                    button. <br />
                </span>
            </div>
            <div className="practice">
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        setCount(count - 1);
                    }}
                >
                    <ArrowDownwardIcon />
                </button>
                <div className="practice-result">
                    <span>{count}</span>
                </div>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    <ArrowUpwardIcon />
                </button>
            </div>
        </div>
    );
};

export default Paractice1;
