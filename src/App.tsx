import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Menu from './containers/menu';
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';

function App() {
    return (
        <>
            <h1>Multirooms Chat</h1>
            <Menu />

            <Routes>
                <Route path="/" element={<ChatPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="register" element={<RegisterPage />} />
            </Routes>
        </>
    );
}

export default App;
