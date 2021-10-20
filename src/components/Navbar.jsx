import React, { Component } from 'react';
import '../navbar.css';
import {Link} from 'react-router-dom';
class NavBar extends React.Component {
    render() { 

        return (
            <nav class="navbar navbar-expand-lg bg-gradient-to-r from-purple-700 to-[#a65fec] px-4 sm:px-6 lg:px-16">
                <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                    <img src="/Q.png" id="logo" style={this.logo} class="d-inline-block" alt=""></img>
                </Link>
                <Link class="navbar-brand" to="/about">
                <span id='headerStyles2' style={this.headerStyles2}>about</span>
                </Link>
                </div>
            </nav>
        )
    }
}
 
export default NavBar;