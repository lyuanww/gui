import React from 'react'

import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Container, Tabs, Tab, Button } from '@mui/material'

import AppBar from '@mui/material/AppBar'
import logo from '../images/GUI Logo.jpg'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <AppBar
      position="static"
      style={{ 
        padding: '10px 50px',
        backgroundColor:'#5f857a',
      }}
      >
        <Toolbar>
          <img style={{width: 90, height: 90, marginRight: '15px', borderRadius: '10px'}} src={logo} alt="GUI Logo"/>
          <Typography variant="h4" noWrap component="div">
            Volunteers in GUI
          </Typography>
          
            <Button variant="contained" style={{marginLeft: 'auto', backgroundColor: '#2d384f' }}>
              Login/Register
            </Button>
          
        </Toolbar>
        <Toolbar styles={{backgroundColor:'#8ca8a0',}}>
          <Tabs centered variant="fullWidth">
            <Link to="/volunteer" style={{ textDecoration: 'none', color: 'inherit', marginRight:'50px'}}>
              <Tab label="Volunteer Programme"/>
            </Link>
            <Link to="/forum" style={{ textDecoration: 'none', color: 'inherit', marginRight:'50px'}}>
              <Tab label="Forum"/>
            </Link>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit'}}>
              <Tab label="Profile"/>
            </Link>
          </Tabs>
        </Toolbar>
      </AppBar>
  )
}
