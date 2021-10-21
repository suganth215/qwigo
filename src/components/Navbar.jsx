import React, { Component } from 'react';
import '../navbar.css';
import {Link} from 'react-router-dom';
class NavBar extends React.Component {
    render() { 

        return (
            <nav class="navbar">
                    <Link class="navbar-brand" to="/">
                    <img src="/Q.png" id="logo1" class="d-inline-block"  alt=""></img>
                </Link>
                <Link class="navbar-brand" to="/about">
                <span id='headerStyles2'>about</span>
                </Link>
                </nav>
        )
    }
}
 
export default NavBar;