import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './About.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/styles'
function About() {
  const [showForm, setShowForm] = React.useState(false)
  const classes = useClasses()
    return ( 
      <div id="container" class="bg-gradient-to-r from-purple-700 to-[#a65fec] px-4 sm:px-6 lg:px-16">
          <Navbar />
          <h1 id="header">Hello, I'm Suganth!</h1>
          <h1 id="header2">React dev | Wannabe full-stack dev | Python programmer</h1>
    <div id="icons">
    <IconButton id="linkedinButton" classes={{root: classes.iconContainer}} disableElevation disableRipple size="small" sx={{ml: 1,"&.MuiButtonBase-root:hover": {bgcolor: "transparent"}}} aria-label="LinkedIn" size="large" href="https://www.linkedin.com/in/suganthan-c">
      <LinkedInIcon className={classes.icon} id="linkedin"/>
    </IconButton >
    <IconButton id="githubButton" classes={{root: classes.iconContainer}} disableElevation disableRipple size="small" sx={{ml: 1,"&.MuiButtonBase-root:hover": {bgcolor: "transparent"}}} aria-label="Github" size="large" href="https://github.com/suganth215">
      <GitHubIcon className={classes.icon} id="github"/>
    </IconButton>
    </div>
    </div>
     )
    }
    const useClasses = makeStyles(theme => ({
      iconContainer: {
          "&:hover $icon": {
              color: 'white',
          }
      },
      icon: {
          color: '#402068',
      },
  }))

export default About;