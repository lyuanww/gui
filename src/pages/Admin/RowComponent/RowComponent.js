import React from 'react'
import { Card, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom';

function RowComponent({name, isNewbie, isIntermediate}) {
  return (
    <Card raised elevation={6} style={{ display: 'flex', alignItems: 'center', padding:'20px'}}>
        <Typography variant="h5" component="h6" style={{marginRight: '10px'}}>
            {name}
        </Typography>
        { isNewbie ? 
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', marginLeft: 'auto'}}>
                <Button variant="contained" style={{backgroundColor: '#5f857a'}}>
                    View Profile
                </Button>
            </Link> 
            : isIntermediate?
            <Link to="/intermediateUser" style={{ textDecoration: 'none', color: 'inherit', marginLeft: 'auto',}}>
                <Button variant="contained" style={{backgroundColor: '#5f857a'}}>
                    View Profile
                </Button>
            </Link>
            :
            <Button 
                variant="contained" 
                onClick={()=>alert("Oops! This user profile is currently unavailable. Please explore 'Newbie User' and 'Intermediate User'.")}
                style={{backgroundColor: '#5f857a', marginLeft: 'auto'}}>
                View Profile
            </Button>
        }
    </Card>
  )
}

export default RowComponent