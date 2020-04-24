import React, {useEffect, useState} from 'react';
import NavItem from "./NavItem";
import '../css/header.css';
import axios from 'axios';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        axios.get('/userinfo')
            .then((response) => {
                if (response.data.user) {
                    setIsLoggedIn(true)
                } else {
                    setIsLoggedIn(false)
                }
            })
    },[])

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
                <NavItem link="/login">{isLoggedIn ? 'Log Out' : 'Log In'}</NavItem>
                {isLoggedIn ? <NavItem link="/newclaim">New Claim</NavItem> : null}

            </div>
        </>
    );
};

export default Header;
