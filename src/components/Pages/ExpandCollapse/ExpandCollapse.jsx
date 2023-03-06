import React, { useEffect, useState } from 'react';
import './expandCollapse.scss';
import axios from 'axios';
import { useChangeMe } from '../hooks';

const ExpandCollapse = () => {
    const [isShow, setIsShow] = useState(false);

    const [type, setType] = useState('posts');
    const [data, setData] = useState([]);
    const types = ['posts', 'albums'];
    const [user] = useState('Chien');

    const [name, changeMe] = useChangeMe(user);

    const openInformation = () => {
        setIsShow(!isShow);
    };

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/${type}`);
            const data = res.data;
            setData(data);
        }
        fetchData();
    }, [type]);

    return (
        <div className="container">
            <div className="title">[Bài tập] Component Expand/Collapse nội dung</div>
            <div className="content">
                <h4>Mục tiêu </h4>
                <ul>
                    <li>Tạo được dự án ReactJS </li>
                    <li>Thao tác với state thông qua event </li>
                    <li>Thực hành conditional rendering </li>
                </ul>
                <h4>Mô tả bài toán</h4>
                <span>
                    Viết chương trình cho phép người dùng mở rộng/thu gọn phần nội dung Khi chương trình được khởi chạy,
                    nội dung mặc định được thu gọn
                </span>
            </div>

            <div className="expand-collapse">
                <button className="btn btn-primary" onClick={openInformation}>
                    Xem giới thiệu
                </button>

                <br />
                <br />
                <h6 className="m-3">{name}</h6>

                <div
                    className="btn btn-primary m-1"
                    onClick={() => changeMe('Chiến Duy ' + Math.floor(Math.random() * 99))}
                >
                    Change me
                </div>

                {types.map((item) => (
                    <button key={item} className="btn btn-primary  m-1" onClick={() => setType(item)}>
                        {item}
                    </button>
                ))}

                {isShow && (
                    <div className="expand-collapse-info m-3">
                        <h3 className="expand-collapse-heading">Giới Thiệu</h3>
                        <p className="expand-collapse-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laborum nostrum quaerat atque
                            aliquam, dolores fuga dolorem fugit eum cum libero, inventore laudantium qui harum modi
                            error ullam vel assumenda? Porro numquam sint, architecto odio beatae nesciunt esse, sit
                            quaerat quis facilis, enim qui facere eius a recusandae assumenda omnis explicabo quod
                            minima minus cum. Est suscipit similique hic amet consectetur assumenda delectus earum odit,
                            qui et error adipisci, illo doloribus dolorum ipsa deleniti at ex nisi, vitae molestiae
                            optio tenetur odio non minima. Pariatur ab, ullam maxime ex hic sapiente, quia veritatis
                            temporibus quo officia officiis autem deleniti explicabo!
                        </p>
                    </div>
                )}

                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExpandCollapse;
