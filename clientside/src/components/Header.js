import React from 'react';
import NavItem from "./NavItem";
import '../css/header.css';

const Header = (props) => {

    const logout = () => {
        window.location.reload()
    }

    return (
        <>
            <span style={{
                float: 'left',
                fontSize: '180%',
                height: '50px',
                paddingTop: '15px'
            }}>
            <NavItem link="/">Dashboard</NavItem>
            </span>
            <div className="header">
                {props.isLoggedIn ? <span onClick={logout}><NavItem link="/logout">Log Out</NavItem></span> : <NavItem link="/login">Log In</NavItem>}
                {props.isLoggedIn ? <NavItem link="/newclaim">New Claim</NavItem> : <NavItem link="/signup">Sign Up</NavItem>}

            </div>
        </>
    );
};

export default Header;
