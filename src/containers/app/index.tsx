import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Chat from '../../pages/ChatPage';
import Login from '../../pages/LoginPage';
import Profile from '../../pages/ProfilePage';
import Register from '../../pages/RegisterPage';

const App = () => (
    <Routes>
        <Route element={<Layout />}>
            <Route index element={<Chat />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="register" element={<Register />} />
        </Route>
    </Routes>
);

export default App;
