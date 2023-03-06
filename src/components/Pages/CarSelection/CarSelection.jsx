import React, { useEffect, useState } from 'react';
import './carSelection.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { Cars } from './Cars';

const CarSelection = () => {
    const [models, setModels] = useState([]);
    const [cars, setCars] = useState([]);
    const [carDisplay, setCarDisplay] = useState(Cars[0]);

    useEffect(() => {
        let modelCopy = new Set(Cars.map((item) => item.model));
        setModels([...modelCopy]);
    }, []);

    const click = (car) => {
        let carCopy = Cars.filter((item) => item.model === car);
        setCars([...carCopy]);
    };

    const onceclk = (i) => {
        setCarDisplay(i);
    };
    return (
        <div className="car-selection">
            <div className="car-selection-heading">
                <ul className="car-selection-menu">
                    <li className="car-selection-menu-logo">
                        <img
                            src="https://www.lamborghini.com/sites/it-en/files/themes/custom/lambo_facelift_2019/images/logo.png"
                            alt=""
                        />
                    </li>
                    {models.map((item) => {
                        return (
                            <div className="car-selection-menu-item" onMouseOver={() => click(item)}>
                                {item}
                            </div>
                        );
                    })}
                </ul>

                <div className="car-selection-submenu">
                    {cars.map((i) => {
                        return (
                            <div className="car-selection-submenu-item" onClick={() => onceclk(i)}>
                                {i.name}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="car-selection-hero">
                <div className="car-selection-title">
                    <p>Home / Models / Model {carDisplay.model} / </p>
                    <span>{carDisplay.name}</span>
                </div>
                <div className="car-selection-hero-image">
                    <img src={carDisplay.img} alt="" />
                </div>
                <div className="car-selection-hero-name">
                    <h4>{carDisplay.name}</h4>
                    <span>{carDisplay.desc}</span>
                </div>

                <div className="car-selection-hero-info">
                    <div className="car-selection-hero-info-item">
                        <h4>POWER (CV) / POWER (KW)</h4>
                        <span>{carDisplay.power}</span>
                    </div>
                    <div className="car-selection-hero-info-item">
                        <h4>MAX. SPEED</h4>
                        <span>{carDisplay.maxspeed}</span>
                    </div>
                    <div className="car-selection-hero-info-item">
                        <h4>0-100 km/h</h4>
                        <span>{carDisplay.acceleration}</span>
                    </div>
                </div>
            </div>

            <div className="car-post"></div>
        </div>
    );
};

export default CarSelection;
