import React from 'react'

import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import AppBar from '@mui/material/AppBar'
import logo from '../images/GUI Logo.jpg'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <AppBar
        position="fixed"
      >
        <Toolbar style={{height: 90}}>
          <img style={{width: 70, height: 70}} src={logo} alt="GUI Logo"/>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
          <Link to="/forum">
            <button>
              Forum
            </button>
          </Link>
        </Toolbar>
      </AppBar>
  )
}
