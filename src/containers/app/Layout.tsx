import * as React from 'react';
import { Outlet } from 'react-router-dom';

import Menu from '../menu';

const Title = () => <h1>Multirooms Chat</h1>;

const Layout = () => (
    <>
        <Title />
        <Menu />
        <Outlet />
    </>
);

export default Layout;
