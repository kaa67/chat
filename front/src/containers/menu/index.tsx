import * as React from 'react';
import { useSelector } from 'react-redux';

import { getIsGuest } from '../../store/selectors/userSelector';

import NavItem from './NavItem';
import NavLogoutItem from './NavLogoutItem';

const Menu = () => {
    const isGuest: boolean = useSelector(getIsGuest);

    return (
        <nav>
            <NavItem name="Chat" to="/" />
            {isGuest && <NavItem name="Login" to="/login" />}
            {isGuest && <NavItem name="Register" to="/register" />}
            {!isGuest && <NavItem name="Profile" to="/profile" />}
            {!isGuest && <NavLogoutItem />}
        </nav>
    );
};

export default Menu;
