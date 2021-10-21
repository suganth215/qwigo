import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/styles'
import { IconButton } from '@mui/material';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
const Header=({handleToggleDarkMode})=>
{
    return(
        <div className="header">
            <Link id="logo" to="/">Qwigo</Link>
            <div>
            <IconButton>
                <Brightness4RoundedIcon
                onClick={()=>
                handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)}
                id="dark"/>
            </IconButton>
            </div>
            </div>
    )
}

export default Header;