import React from 'react'
import { Card, Typography, Button } from '@mui/material'

function RowComponent({name, link}) {
  return (
    <Card raised elevation={6} style={{ display: 'flex', alignItems: 'center', padding:'20px'}}>
        <Typography variant="h5" component="h6" style={{marginRight: '10px'}}>
            {name}
        </Typography>
        <Button 
            variant="contained"
            onClick={() => {
                alert('clicked');
                
            }}
            style={{marginLeft: 'auto', backgroundColor: '#5f857a'}}
            
        >
            View Profile
        </Button>
    </Card>
  )
}

export default RowComponent