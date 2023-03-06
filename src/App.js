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
            </Routes>
        </div>
    );
}

export default App;
