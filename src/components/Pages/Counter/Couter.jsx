import React from 'react';
import Component1 from './Component1';
import Component2 from './Component2';

const Couter = () => {
    return (
        <div>
            <div className="container">
                <div className="title">[Bài tập] Xây dựng Component Counter</div>
                <div className="content">
                    <h4>Mục tiêu </h4>
                    <ul>
                        <li>Hiểu và sử dụng được useState</li>
                    </ul>
                    <h4>Mô tả bài toán</h4>
                    <ul>
                        <li>Counter 1 thực hiện tăng một đơn vị khi người dùng ấn “Add 1”</li>
                        <li>Counter 2 thực hiện tăng hai đơn vị khi người dùng ấn “Add 2”</li>
                    </ul>
                    <span>
                        Sử dụng <strong>Hook custom</strong> để chia sẻ logic code tăng số giữa 2 component Counter 1 và
                        Counter 2
                    </span>
                </div>
                <div className="practice">
                    <Component1 />
                    <Component2 />
                </div>
            </div>
        </div>
    );
};

export default Couter;
