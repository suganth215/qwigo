import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import './Home.css';
function Home() {
    return ( 
        <div id="container" class="bg-gradient-to-r from-purple-700 to-[#a65fec] px-4 sm:px-6 lg:px-16">
            <h1 id="bodyText">Qwigo</h1>
            <h1 id="bodyText2">Quick notes on the go!</h1>
            <Button component={Link} to="/about" type="button" id="getStarted" variant="contained">Get Started</Button>
        </div>
     );
}

export default Home;