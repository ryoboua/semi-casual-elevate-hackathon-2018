import React from 'react';
import logo from './logo.png';

const NavBar = () => (
    <nav className="navbar" style={{backgroundColor: '#021F6C'}}>
        <img src={`${logo}`} width="102" height="27" className="d-inline-block align-top" alt=""/>
    </nav>
)

export default NavBar;