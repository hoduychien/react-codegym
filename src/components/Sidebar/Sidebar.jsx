import React, { useState } from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WebhookIcon from '@mui/icons-material/Webhook';
import FileCopyIcon from '@mui/icons-material/FileCopy';
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenHook, setIsOpenHook] = useState(false);
    const [isOpenForm, setIsOpenForm] = useState(true);

    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-logo">
                    <h3>CODEGYM ONLINE</h3>
                </div>
                <div className="sidebar-menu">
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <div className="sidebar-list-item-content" onClick={() => setIsOpen(!isOpen)}>
                                <WidgetsIcon className="sidebar-list-item-icon" />
                                <span>State & Lifecycle method</span>
                                <ExpandMoreIcon className="sidebar-list-item-icon" />
                            </div>
                            <ul className={isOpen ? 'sidebar-list-submenu active-submenu' : 'sidebar-list-submenu'}>
                                <Link to="/expand-collapse">
                                    <li className="sidebar-list-submenu-item">Expand/Collapse</li>
                                </Link>
                                <Link to="/calculator">
                                    <li className="sidebar-list-submenu-item">Calculator</li>
                                </Link>
                                <Link to="/login-logout">
                                    <li className="sidebar-list-submenu-item">Login/Logout</li>
                                </Link>
                                <Link to="/todo-app">
                                    <li className="sidebar-list-submenu-item">Todo App</li>
                                </Link>
                                <Link to="/student-managemen">
                                    <li className="sidebar-list-submenu-item">Student Management</li>
                                </Link>
                            </ul>
                        </li>

                        <li className="sidebar-list-item">
                            <div className="sidebar-list-item-content" onClick={() => setIsOpenHook(!isOpenHook)}>
                                <WebhookIcon className="sidebar-list-item-icon" />
                                <span>Hook - React Hooks</span>
                                <ExpandMoreIcon className="sidebar-list-item-icon" />
                            </div>
                            <ul className={isOpenHook ? 'sidebar-list-submenu active-submenu' : 'sidebar-list-submenu'}>
                                <Link to="/practice-hook-1">
                                    <li className="sidebar-list-submenu-item">Practice - 1</li>
                                </Link>
                                <Link to="/practice-hook-2">
                                    <li className="sidebar-list-submenu-item">Practice - 2</li>
                                </Link>
                                <Link to="/practice-hook-3">
                                    <li className="sidebar-list-submenu-item">Practice - 3</li>
                                </Link>
                                <Link to="/car-selection">
                                    <li className="sidebar-list-submenu-item">Car Selection</li>
                                </Link>
                                <Link to="/timer">
                                    <li className="sidebar-list-submenu-item">Timer - useEffect</li>
                                </Link>
                                <Link to="/counter">
                                    <li className="sidebar-list-submenu-item">Couter custom hook</li>
                                </Link>
                            </ul>
                        </li>
                        <li className="sidebar-list-item">
                            <div className="sidebar-list-item-content" onClick={() => setIsOpenForm(!isOpenForm)}>
                                <FileCopyIcon className="sidebar-list-item-icon" />
                                <span>Form - React Form</span>
                                <ExpandMoreIcon className="sidebar-list-item-icon" />
                            </div>
                            <ul className={isOpenForm ? 'sidebar-list-submenu active-submenu' : 'sidebar-list-submenu'}>
                                <Link to="/form-practice-1">
                                    <li className="sidebar-list-submenu-item">Practice - Sign In</li>
                                </Link>
                                <Link to="/form-practice-3">
                                    <li className="sidebar-list-submenu-item">Practice - Login</li>
                                </Link>
                                <Link to="/form-practice-4">
                                    <li className="sidebar-list-submenu-item">Practice - Login - Formik</li>
                                </Link>
                                <Link to="/contact-form">
                                    <li className="sidebar-list-submenu-item">React Form - Contact form</li>
                                </Link>
                                <Link to="/book-manager">
                                    <li className="sidebar-list-submenu-item">Book Management</li>
                                </Link>
                                <Link to="/form-email">
                                    <li className="sidebar-list-submenu-item">Form Email</li>
                                </Link>
                                <Link to="/form-medical">
                                    <li className="sidebar-list-submenu-item">Medical Form</li>
                                </Link>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-footer">
                <div className="sidebar-footer-avatar">
                    <img src="https://v4.material-ui.com/static/logo.png" alt="" />
                </div>
                <div className="sidebar-footer-text">
                    <h3>ChienDuy</h3>
                    <span>chienhoo20@gmail.com</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
