import * as React from 'react';
import { Outlet } from 'react-router-dom';

import Menu from '../containers/menu';

const Layout = () => (
    <>
        <h1>Multirooms Chat</h1>
        <Menu />
        <Outlet />
    </>
);

export default Layout;
