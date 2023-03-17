import React from 'react';
import { Outlet } from 'react-router-dom';
import './routerEx.scss';

const RouterEx2 = () => {
    return (
        <div className="container">
            <div className="title">[Bài tập] Router 2</div>
            <div className="content">
                <h4>Mục tiêu </h4>
                <ul>
                    <li>Triển khai được Router</li>
                    <li>Sử dụng được useNavigate để truyền dữ liệu là một object qua router giữa hai component </li>
                </ul>
                <h4>Mô tả bài toán</h4>
                <div>Xây dựng ứng dụng có chức năng login.</div>
                <div>Sau khi login sẽ hiển thị danh sách employee</div>
                <div>
                    Người dùng click vào button detail ở mỗi hàng employee để xem chi tiết thông tin của một employee
                </div>
            </div>

            <Outlet />
        </div>
    );
};

export default RouterEx2;
