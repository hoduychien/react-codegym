import React, { useState } from 'react';
import './calculator.scss';

const Calculator = () => {
    const [result, setResult] = useState('');

    const calc = ['+', '-', '*', '/', '.', '%'];

    const handleClickButton = (value) => {
        try {
            if (
                calc.includes(result[result.length - 1]) &&
                calc.includes(value) &&
                value !== result[result.length - 1]
            ) {
                setResult(result.replace(result[result.length - 1], value));
            }
            if (result.length === 0 && calc.includes(value)) {
                return;
            }

            if (result.length === 0 && value === '=') {
                return;
            }

            if (calc.includes(result[result.length - 1]) && calc.includes(value)) {
                return;
            }
            if (calc.includes(result[result.length - 1]) && value == '=') {
                return;
            }

            if (value === 'AC') {
                setResult('');
                return;
            }
            if (value === 'C') {
                if (result.length > 0) {
                    setResult(result.substring(0, result.length - 1));
                } else {
                    setResult('');
                }
                return;
            }
            setResult(result + value);
            if (value === '=') {
                setResult(eval(result));
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <div className="title">[Bài tập] Xây dựng ứng dụng máy tính đơn giản</div>
            <div className="content">
                <h4>Mục tiêu </h4>
                <ul>
                    <li>Hiểu và sử dụng được Function Component </li>
                </ul>
                <h4>Mô tả bài toán</h4>
                <span>Xây dựng component thực thi các phép toán + – x /.</span>

                <div className="calculator">
                    <div className="calculator-display">
                        <div className="calculator-result">{result || '0'}</div>
                    </div>
                    <div className="calculator-board">
                        <button className="calculator-item" onClick={() => handleClickButton('AC')}>
                            AC
                        </button>
                        <button className="calculator-item" onClick={() => handleClickButton('C')}>
                            C
                        </button>
                        <button className="calculator-item" onClick={() => handleClickButton('%')}>
                            %
                        </button>
                        <button className="calculator-item" onClick={() => handleClickButton('/')}>
                            ÷
                        </button>
                        <button className="calculator-item" onClick={() => handleClickButton('7')}>
                            7
                        </button>
                        <button className="calculator-item" onClick={() => handleClickButton('8')}>
                            8
                        </button>
                        <button className="calculator-item" onClick={() => handleClickButton(9)}>
                            9
                        </button>
                        <button className="calculator-item" onClick={() => handleClickButton('*')}>
                            ×
                        </button>
                        <button className="calculator-item" onClick={() => handleClickButton(4)}>
                            4
                        </button>
                        <button className="calculator-item" onClick={() => handleClickButton(5)}>
                            5
                        </button>
                        <button className="calculator-item" onClick={() => handleClickButton(6)}>
                            6
                        </button>
                        <button className="calculator-item" onClick={() => handleClickButton('-')}>
                            -
                        </button>
                        <button className="calculator-item" onClick={() => handleClickButton(1)}>
                            1
                        </button>
                        <button className="calculator-item" onClick={() => handleClickButton(2)}>
                            2
                        </button>
                        <button className="calculator-item" onClick={() => handleClickButton(3)}>
                            3
                        </button>
                        <button className="calculator-item" onClick={() => handleClickButton('+')}>
                            +
                        </button>
                        <button className="calculator-item" onClick={() => handleClickButton(0)}>
                            0
                        </button>
                        <button className="calculator-item" onClick={() => handleClickButton('.')}>
                            .
                        </button>
                        <button
                            className="calculator-item calculator-item-submit"
                            onClick={() => handleClickButton('=')}
                        >
                            =
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
