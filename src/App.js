import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import './App.scss';
import Header from './components/Header/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
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

function App() {
    const path = useLocation().pathname;
    return (
        <div className="App">
            {path !== '/car-selection' && (
                <>
                    <Sidebar />
                    <Header />
                </>
            )}

            <Routes>
                <Route path="/" element={<FormEmail />} />
                <Route path="/expand-collapse" element={<ExpandCollapse />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/login-logout" element={<LoginLogout />} />
                <Route path="/todo-app" element={<TodoApp />} />
                <Route path="/student-managemen" element={<StudentManagement />} />
                <Route path="/practice-hook-1" element={<Paractice1 />} />
                <Route path="/practice-hook-2" element={<Paractice2 />} />
                <Route path="/practice-hook-3" element={<Paractice3 />} />
                <Route path="/car-selection" element={<CarSelection />} />
                <Route path="/timer" element={<Timer />} />
                <Route path="/counter" element={<Couter />} />
                <Route path="/contact-form" element={<Contact />} />
                <Route path="/book-manager" element={<BookManager />} />
                <Route path="/form-practice-1" element={<Practice1 />} />
                <Route path="/form-practice-3" element={<Practice3 />} />
                <Route path="/form-practice-4" element={<Practice4 />} />
                <Route path="/form-email" element={<FormEmail />} />
                <Route path="/form-medical" element={<MedicalForm />} />
            </Routes>
        </div>
    );
}

export default App;
