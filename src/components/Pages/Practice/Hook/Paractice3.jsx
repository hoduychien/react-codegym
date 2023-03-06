import React, { useEffect, useState } from 'react';
import { useClock } from '../../hooks';
import './paractice1.scss';

const Paractice3 = () => {
    const [time] = useClock();

    return (
        <div className="container">
            <div className="title">[Thực hành] Triển khai HookCustom</div>
            <div className="content">
                <h4>Mục tiêu </h4>
                <ul>
                    <li>Tự xây dựng được hooks</li>
                </ul>
                <h4>Mô tả bài toán</h4>
                <span>Xây dựng clock hook lấy về thời gian hiện tại.</span>
            </div>

            <div className="practice-3">
                <div className="practice-3-result">{time}</div>
            </div>
        </div>
    );
};

export default Paractice3;
