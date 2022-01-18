import * as React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
    <nav>
        <Link to="/">Main</Link>/<Link to="login">Login</Link>/
        <Link to="profile">Profile</Link>/<Link to="register">Register</Link>
    </nav>
);

export default Menu;
