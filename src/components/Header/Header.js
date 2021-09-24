import "./Header.css";
import headerLogo from '../../images/header-image.png'
import React from 'react';

const Header = () => {
    return (
        <div className='header-container'>
            <h1>Modern Fair Store</h1>
            <img src={headerLogo} alt="" />
        </div>
    );
};

export default Header;