import { createBrowserRouter } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Calculator from './components/Pages/Calculator/Calculator';
import ExpandCollapse from './components/Pages/ExpandCollapse/ExpandCollapse';
import LoginLogout from './components/Pages/LoginLogout/Login';
import TodoApp from './components/Pages/TodoApp/TodoApp';
import StudentManagement from './components/Pages/StudentManagement/StudentManagerment';
import Paractice1 from './components/Pages/Practice/Hook/Paractice1';
import Paractice2 from './components/Pages/Practice/Hook/Paractice2';
import Paractice3 from './components/Pages/Practice/Hook/Paractice3';
import CarSelection from './components/Pages/CarSelection/CarSelection';
import Timer from './components/Pages/Timer/Timer';
import Couter from './components/Pages/Counter/Couter';
import Contact from './components/Pages/Form/Contact/Contact';
import BookManager from './components/Pages/Form/BookManager/BookManager';
import Practice1 from './components/Pages/Practice/Form/Practice1';
import Practice3 from './components/Pages/Practice/Form/Practice3';
import Practice4 from './components/Pages/Practice/Form/Practice4';
import FormEmail from './components/Pages/Form/Email/FormEmail';
import MedicalForm from './components/Pages/Form/Medical/MedicalForm';
import RouterEx2 from './components/Pages/ReactRouter/Exercise/RouterEx2';
import SignIn from './components/Pages/ReactRouter/Exercise/SignIn';
import Home from './components/Pages/ReactRouter/Exercise/Home';
import EmployeeDetail from './components/Pages/ReactRouter/Exercise/EmployeeDetail';
import RouterParactice1 from './components/Pages/ReactRouter/Paractice/RouterParactice1';
import TodoList from './components/Pages/JsonServer/TodoList/TodoList';
import Books from './components/Pages/JsonServer/Book/Books';
import ManageContacts from './components/Pages/JsonServer/ManageContacts/ManageContacts';
import ContactLists from './components/Pages/JsonServer/ManageContacts/ContactLists';
import ContactDetail from './components/Pages/JsonServer/ManageContacts/ContactDetail';
import ContactCreate from './components/Pages/JsonServer/ManageContacts/ContactCreate';
import UserManager from './components/Pages/JsonServer/UserManage/UserManager';
import ReduxCouter from './components/Pages/ReactRedux/Couter/ReduxCouter';
import TodoAppRedux from './components/Pages/ReactRedux/TodoApp/TodoApp';
import ShoppingCart from './components/Pages/ReactRedux/ShoppingCart/ShoppingCart';
import Ecommerce from './components/Pages/ReactRedux/ShoppingCart/Ecommerce';
import Products from './components/Pages/ReactRedux/ShoppingCart/Products';
import UserReduxSaga from './components/Pages/ReactRedux/UserReduxSaga/UserReduxSaga';
import Login from './components/Pages/ReactRedux/UserReduxSaga/Login';
import UserList from './components/Pages/ReactRedux/UserReduxSaga/UserList';
import BlogHome from './components/Pages/ReactRedux/Blog/Home';
import PostDetail from './components/Pages/ReactRedux/Blog/PostDetail';
import Posts from './components/Pages/ReactRedux/Blog/Posts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Sidebar />,
        children: [
            {
                path: 'expand-collapse',
                element: <ExpandCollapse />,
            },
            {
                path: 'calculator',
                element: <Calculator />,
            },
            {
                path: 'login-logout',
                element: <LoginLogout />,
            },
            {
                path: 'todo-app',
                element: <TodoApp />,
            },
            {
                path: 'student-managemen',
                element: <StudentManagement />,
            },
            {
                path: 'practice-hook-1',
                element: <Paractice1 />,
            },
            {
                path: 'practice-hook-2',
                element: <Paractice2 />,
            },
            {
                path: 'practice-hook-3',
                element: <Paractice3 />,
            },

            {
                path: 'car-selection',
                element: <CarSelection />,
            },
            {
                path: 'timer',
                element: <Timer />,
            },
            {
                path: 'counter',
                element: <Couter />,
            },
            {
                path: 'contact-form',
                element: <Contact />,
            },
            {
                path: 'book-manager',
                element: <BookManager />,
            },
            {
                path: 'form-practice-1',
                element: <Practice1 />,
            },
            {
                path: 'form-practice-3',
                element: <Practice3 />,
            },
            {
                path: 'form-practice-4',
                element: <Practice4 />,
            },
            {
                path: 'form-email',
                element: <FormEmail />,
            },
            {
                path: 'form-medical',
                element: <MedicalForm />,
            },
            {
                path: 'router-paractice-1',
                element: <RouterParactice1 />,
            },
            {
                path: 'router-ex-2',
                element: <RouterEx2 />,
                children: [
                    {
                        path: '',
                        element: <SignIn />,
                    },
                    {
                        path: 'sign-in',
                        element: <SignIn />,
                    },

                    {
                        path: 'home',
                        element: <Home />,
                    },
                    {
                        path: 'emplyee/:id',
                        element: <EmployeeDetail />,
                    },
                ],
            },
            {
                path: 'json-server-todolist',
                element: <TodoList />,
            },
            {
                path: 'json-server-books',
                element: <Books />,
            },
            {
                path: 'manage-contacts',
                element: <ManageContacts />,
                children: [
                    {
                        path: '',
                        element: <ContactLists />,
                    },
                    {
                        path: 'contact/:id',
                        element: <ContactDetail />,
                    },
                    {
                        path: 'create-contact',
                        element: <ContactCreate />,
                    },
                ],
            },

            {
                path: 'users-manager',
                element: <UserManager />,
            },

            {
                path: 'react-redux-couter',
                element: <ReduxCouter />,
            },
            {
                path: 'react-redux-todo-app',
                element: <TodoAppRedux />,
            },
            {
                path: 'e-commerce',
                element: <Ecommerce />,
                children: [
                    {
                        path: 'products',
                        element: <Products />,
                    },
                    {
                        path: 'checkout',
                        element: <ShoppingCart />,
                    },
                ],
            },
            {
                path: 'react-redux-user-manager',
                element: <UserReduxSaga />,
                children: [
                    {
                        path: 'login',
                        element: <Login />,
                    },
                    {
                        path: 'users',
                        element: <UserList />,
                    },
                ],
            },
            {
                path: 'redux-blog',
                element: <BlogHome />,
                children: [
                    {
                        path: '',
                        element: <Posts />,
                    },
                    {
                        path: 'post/:id',
                        element: <PostDetail />,
                    },
                ],
            },
        ],
    },
]);

export { router };
