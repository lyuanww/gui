import React from 'react'

import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import AppBar from '@mui/material/AppBar'

export default function Navbar() {
  return (
    <AppBar
        position="fixed"
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
  )
}
