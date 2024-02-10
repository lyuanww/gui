import React, { useState } from 'react';

import { Avatar, Container, Paper, Typography, Box, Tab, Tabs, Divider, Grid, Card } from '@mui/material';
import PortraitIcon from '@mui/icons-material/Portrait';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import RowComponent from './RowComponent/RowComponent';
import adminPhoto from '../../images/adminProfilePhoto.jpg'
import report1 from '../../images/surveyAverageScore.png';
import report2 from '../../images/surveyTable.png';
import report3 from '../../images/pieChart.png'


export default function AdminPage() {
  // const classes = useStyles();
  const [value, setValue] = useState('userAcc');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const usersList = [
    {userId: 1, userName: "Newbie User", isNewbie: true}, 
    {userId: 2, userName: "Intermediate User", isNewbie: false},
    {userId: 3, userName: "Allice Chong", isNewbie: true}, 
    {userId: 4, userName: "Ben Willson", isNewbie: true}, 
    {userId: 5, userName: "Carla Watson", isNewbie: true}, 
  ]

  return (
    <Container maxwidth="xl">
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
              <Grid container alignItems="stretch" spacing={2} padding={4}>
                { usersList?.map((user) => 
                    <Grid key={user.userId} item xs={12}>
                        <RowComponent name={user.userName} isNewbie={user.isNewbie}/>
                    </Grid>
                ) }
              </Grid> 
              : 
              <>
                <Typography variant="h4" component="h5" style={{height: '40px', padding: '20px', marginTop: '10px'}}>
                  Bar Chart from Question 1 to 4
                </Typography>
                <img src={report1} alt="report1" style={{ width: 'auto', height: '500px', margin:'0px 20px', borderRadius:'5px' }} />
                <Typography variant="h4" component="h5" style={{height: '40px', padding: '20px', marginTop: '10px'}}>
                  Table from Question 1 to 4
                </Typography>
                <img src={report2} alt="report2" style={{ width: 'auto', height: '500px', margin:'0px 20px', borderRadius:'5px' }} />
                <Typography variant="h4" component="h5" style={{height: '40px', padding: '20px', marginTop: '10px'}}>
                  Pie Chart from Question 5
                </Typography>
                <img src={report3} alt="report3" style={{ width: 'auto', height: '500px', margin:'0px 20px 40px', borderRadius:'5px' }} />
              </>
            }
          </Box>
    </Container>
  )
}
// <Divider style={{ margin: '20px 0 20px 0' }} />