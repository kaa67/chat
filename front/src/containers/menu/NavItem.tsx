import * as React from 'react';
import { Link } from 'react-router-dom';

import { NavItemProps } from '../../interfaces';

const NavItem = (props: NavItemProps) => (
    <Link className="navItem" to={props.to}>
        {props.name}
    </Link>
);

export default NavItem;
