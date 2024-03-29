import React, { useState } from 'react';
import './sidebar.scss';
import { NavLink } from 'react-router-dom';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WebhookIcon from '@mui/icons-material/Webhook';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import RouterIcon from '@mui/icons-material/Router';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { useLocation } from 'react-router-dom';
import StorageIcon from '@mui/icons-material/Storage';

const Sidebar = () => {
    let location = useLocation().pathname;
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenHook, setIsOpenHook] = useState(false);
    const [isOpenForm, setIsOpenForm] = useState(false);
    const [isOpenRouter, setIsOpenRouter] = useState(false);
    const [isOpenApiClient, setIsOpenApiClient] = useState(false);

    return (
        <>
            {location !== '/car-selection' && (
                <>
                    <Header />
                    <div className="sidebar">
                        <div className="sidebar-wrapper">
                            <div className="sidebar-logo">
                                <h3>CODEGYM ONLINE</h3>
                            </div>
                            <div className="sidebar-menu">
                                <ul className="sidebar-list">
                                    <li className="sidebar-list-item">
                                        <div
                                            className="sidebar-list-item-content"
                                            onClick={() => setIsOpen(!isOpen)}
                                        >
                                            <WidgetsIcon className="sidebar-list-item-icon" />
                                            <span>State & Lifecycle method</span>
                                            <ExpandMoreIcon className="sidebar-list-item-icon" />
                                        </div>
                                        <ul
                                            className={
                                                isOpen
                                                    ? 'sidebar-list-submenu active-submenu'
                                                    : 'sidebar-list-submenu'
                                            }
                                        >
                                            <NavLink
                                                to="/expand-collapse"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Expand/Collapse
                                                </li>
                                            </NavLink>
                                            <NavLink
                                                to="/calculator"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Calculator
                                                </li>
                                            </NavLink>
                                            <NavLink
                                                to="/login-logout"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Login/Logout
                                                </li>
                                            </NavLink>
                                            <NavLink to="/todo-app">
                                                <li className="sidebar-list-submenu-item">
                                                    Todo App
                                                </li>
                                            </NavLink>
                                            <NavLink
                                                to="/student-managemen"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Student Management
                                                </li>
                                            </NavLink>
                                        </ul>
                                    </li>
                                    <li className="sidebar-list-item">
                                        <div
                                            className="sidebar-list-item-content"
                                            onClick={() => setIsOpenHook(!isOpenHook)}
                                        >
                                            <WebhookIcon className="sidebar-list-item-icon" />
                                            <span>Hook - React Hooks</span>
                                            <ExpandMoreIcon className="sidebar-list-item-icon" />
                                        </div>
                                        <ul
                                            className={
                                                isOpenHook
                                                    ? 'sidebar-list-submenu active-submenu'
                                                    : 'sidebar-list-submenu'
                                            }
                                        >
                                            <NavLink
                                                to="/practice-hook-1"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Practice - 1
                                                </li>
                                            </NavLink>
                                            <NavLink
                                                to="/practice-hook-2"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Practice - 2
                                                </li>
                                            </NavLink>
                                            <NavLink
                                                to="/practice-hook-3"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Practice - 3
                                                </li>
                                            </NavLink>
                                            <NavLink
                                                to="/car-selection"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Car Selection
                                                </li>
                                            </NavLink>
                                            <NavLink
                                                to="/timer"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Timer - useEffect
                                                </li>
                                            </NavLink>
                                            <NavLink
                                                to="/counter"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Couter custom hook
                                                </li>
                                            </NavLink>
                                        </ul>
                                    </li>
                                    <li className="sidebar-list-item">
                                        <div
                                            className="sidebar-list-item-content"
                                            onClick={() => setIsOpenForm(!isOpenForm)}
                                        >
                                            <FileCopyIcon className="sidebar-list-item-icon" />
                                            <span>Form - React Form</span>
                                            <ExpandMoreIcon className="sidebar-list-item-icon" />
                                        </div>
                                        <ul
                                            className={
                                                isOpenForm
                                                    ? 'sidebar-list-submenu active-submenu'
                                                    : 'sidebar-list-submenu'
                                            }
                                        >
                                            <NavLink
                                                to="/form-practice-1"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Practice - Sign In
                                                </li>
                                            </NavLink>
                                            <NavLink
                                                to="/form-practice-3"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Practice - Login
                                                </li>
                                            </NavLink>
                                            <NavLink
                                                to="/form-practice-4"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Practice - Login - Formik
                                                </li>
                                            </NavLink>
                                            <NavLink
                                                to="/contact-form"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    React Form - Contact form
                                                </li>
                                            </NavLink>
                                            <NavLink
                                                to="/book-manager"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Book Management
                                                </li>
                                            </NavLink>
                                            <NavLink
                                                to="/form-email"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Form Email
                                                </li>
                                            </NavLink>
                                            <NavLink
                                                to="/form-medical"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Medical Form
                                                </li>
                                            </NavLink>
                                        </ul>
                                    </li>

                                    <li className="sidebar-list-item">
                                        <div
                                            className="sidebar-list-item-content"
                                            onClick={() => setIsOpenRouter(!isOpenRouter)}
                                        >
                                            <RouterIcon className="sidebar-list-item-icon" />
                                            <span>Router - React Router</span>
                                            <ExpandMoreIcon className="sidebar-list-item-icon" />
                                        </div>
                                        <ul
                                            className={
                                                isOpenRouter
                                                    ? 'sidebar-list-submenu active-submenu'
                                                    : 'sidebar-list-submenu'
                                            }
                                        >
                                            <NavLink
                                                to="router-paractice-1"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Paractice router 1
                                                </li>
                                            </NavLink>
                                            <NavLink
                                                to="router-ex-2"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    React router Login
                                                </li>
                                            </NavLink>
                                        </ul>
                                    </li>

                                    <li className="sidebar-list-item">
                                        <div
                                            className="sidebar-list-item-content"
                                            onClick={() => setIsOpenApiClient(!isOpenApiClient)}
                                        >
                                            <StorageIcon className="sidebar-list-item-icon" />
                                            <span>API Clients</span>
                                            <ExpandMoreIcon className="sidebar-list-item-icon" />
                                        </div>
                                        <ul
                                            className={
                                                isOpenApiClient
                                                    ? 'sidebar-list-submenu active-submenu'
                                                    : 'sidebar-list-submenu'
                                            }
                                        >
                                            <NavLink
                                                to="json-server-todolist"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Todo List
                                                </li>
                                            </NavLink>
                                            <NavLink
                                                to="json-server-books"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Books Management
                                                </li>
                                            </NavLink>

                                            <NavLink
                                                to="manage-contacts"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Contacts Management
                                                </li>
                                            </NavLink>

                                            <NavLink
                                                to="users-manager"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Users Management
                                                </li>
                                            </NavLink>
                                        </ul>
                                    </li>

                                    <li className="sidebar-list-item">
                                        <div className="sidebar-list-item-content">
                                            <StorageIcon className="sidebar-list-item-icon" />
                                            <span>React - Redux</span>
                                            <ExpandMoreIcon className="sidebar-list-item-icon" />
                                        </div>
                                        <ul className="sidebar-list-submenu active-submenu">
                                            <NavLink
                                                to="react-redux-couter"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Couter - redux
                                                </li>
                                            </NavLink>
                                            <NavLink
                                                to="react-redux-todo-app"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Todo App - redux
                                                </li>
                                            </NavLink>
                                            <NavLink
                                                to="/e-commerce"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    Shopping Cart - redux
                                                </li>
                                            </NavLink>
                                            <NavLink
                                                to="/react-redux-user-manager/login"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">
                                                    User Manager - redux-saga
                                                </li>
                                            </NavLink>
                                            <NavLink
                                                to="/redux-blog"
                                                className={({ isActive, isPending }) =>
                                                    isPending
                                                        ? 'pending-submenu-item'
                                                        : isActive
                                                        ? 'active-submenu-item'
                                                        : ''
                                                }
                                            >
                                                <li className="sidebar-list-submenu-item">Blogs</li>
                                            </NavLink>
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
                </>
            )}

            <Outlet />
        </>
    );
};

export default Sidebar;
