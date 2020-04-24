import React from 'react';
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return (
        <NavLink exact to={props.link} className="navItem">
            {props.children}
        </NavLink>
    );
};

export default NavItem;
