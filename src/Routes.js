import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './views/login/Login';
import HomePage from './views/home/Home';
import Logout from './views/logout/Logout'

const App = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/logout" element={<Logout/>} />
        </Routes>
    );
};

export default App;
