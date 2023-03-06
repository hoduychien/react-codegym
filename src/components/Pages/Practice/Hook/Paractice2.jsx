import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './paractice1.scss';

const options = [
    { value: 'Java', label: 'Java' },
    { value: 'Angular', label: 'Angular' },
    { value: 'Javascript', label: 'Javascript' },
    { value: 'Php', label: 'Php' },
];

const Paractice2 = () => {
    const [select, setSelect] = useState('');
    const [value, setValue] = useState('');
    useEffect(() => {
        console.log('Run Effect');
        switch (select) {
            case 'Java':
                setValue('Java');
                break;
            case 'Angular':
                setValue('Angular');

                break;
            case 'Javascript':
                setValue('Javascript');

                break;
            case 'Php':
                setValue('Php');
                break;
        }
    }, [select]);

    const handleOnchangeSelect = (e) => {
        setSelect(e.value);
    };

    return (
        <div className="container">
            <div className="title">[Thực hành] Triển khai useEffect</div>
            <div className="content">
                <h4>Mục tiêu </h4>
                <ul>
                    <li>Hiểu và sử dụng được useEffect</li>
                </ul>
                <h4>Mô tả bài toán</h4>
                <span>
                    Sử dụng useEffect để để lắng nghe sự thay đổi của biến và cập nhật giao diện tương ứng
                    <br />
                    Xây dựng component EffectDemo. Sử dụng hooks useEffect
                </span>
            </div>
            <div className="practice-2">
                <Select options={options} onChange={(e) => handleOnchangeSelect(e)} />
                <div className="practice-2-result">Your selected: {value}</div>
            </div>
        </div>
    );
};

export default Paractice2;
