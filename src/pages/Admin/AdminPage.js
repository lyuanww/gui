import React, { useState } from 'react';

import { Avatar, Container, Paper, Typography, Box, Tab, Tabs, Divider, Grid } from '@mui/material';
import PortraitIcon from '@mui/icons-material/Portrait';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import RowComponent from './RowComponent/RowComponent';
import adminPhoto from '../../images/adminProfilePhoto.jpg'


export default function AdminPage() {
  // const classes = useStyles();
  const [value, setValue] = useState('userAcc');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const usersList = [
    {userId: 1, userName: "Newbie User", userLink:"this is a link"}, 
    {userId: 2, userName: "Intermediate User", userLink:"this is another link"},
    {userId: 3, userName: "Allice Chong", userLink:"this is a link"}, 
    {userId: 4, userName: "Ben Willson", userLink:"this is a link"}, 
    {userId: 5, userName: "Carla Watson", userLink:"this is a link"}, 
  ]

  return (
    <div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop:'15px', marginBottom:'15px'}}>
            <Avatar
              alt={"Admin"}
              src={adminPhoto}
              sx={{ width: 130, height: 130, marginRight: '10px' }} // Added marginRight for spacing
            />
            <Typography variant="h3" component="h4">
              GUI Admin 1
            </Typography>
          </div>

          <Box sx={{ width: '100%', borderRadius: 1, backgroundColor: '#e4ebed', margin:'auto', alignitems:'center'}}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              <Tab
                icon={<PortraitIcon />}
                iconPosition="start"
                value="userAcc"
                label="User Accounts"
              />
              <Tab 
                icon={<InsertChartIcon />}
                iconPosition="start"
                value="surveyReports" 
                label="Survey Reports" />
            </Tabs>
            {value === 'userAcc' ? 
              <Grid container alignItems="stretch" spacing={2} padding={2}>
                { usersList?.map((user) => 
                    <Grid key={user.userId} item xs={12}>
                        <RowComponent name={user.userName} link={user.userLink}/>
                    </Grid>
                ) }
              </Grid> 
              : 
              <Typography variant="h4" component="h5" style={{height: '120px', padding: '20px', margin: '50px'}}>
                <AutoAwesomeIcon/> Incoming Feature!
              </Typography>
            }
          </Box>
   
    </div>
  )
}
// <Divider style={{ margin: '20px 0 20px 0' }} />