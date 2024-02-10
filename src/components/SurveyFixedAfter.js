import React from 'react';
import Box from '@mui/material/Box';
import { Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export default function SurveyFixedAfter() {
   
    return (
        <Box sx={{ p: 3, width: 900, alignItems: 'center', justifyContent: 'center', }}>
            <Typography variant="h4" gutterBottom>
                Since you've started your journey with GUI...
            </Typography>
            <Typography variant="h5" gutterBottom>
                Help us find out more about our programmes' impact on our volunteers by doing this short survey!
            </Typography>
            <div style={{display: 'flex', flex: 'row', padding: 10 }}>
            <Typography variant='h6' gutterBottom>
                1. On a scale of 1-5, how passionate are you about environmental conservation and sustainability now? 1 being not passionate at all, 5 being extremely passionate
            </Typography>
            <Box sx={{ minWidth: 100, width: 100, margin: 5 }}>
                <Typography variant="body1" align="center">
                    4
                </Typography>
            </Box>
            </div>
            <div style={{display: 'flex', flex: 'row', padding: 10 }}>
            <Typography variant='h6' gutterBottom>
                2. On a scale of 1-5, how comfortable are you with engaging in farm work and woodwork activities now? 1 being not comfortable at all, 5 being extremely comfortable
            </Typography>
            <Box sx={{ minWidth: 100, width: 100, margin: 5 }}>
                <Typography variant="body1" align="center">
                    3
                </Typography>
            </Box>
            </div>
            <div style={{display: 'flex', flex: 'row', padding: 10 }}>
            <Typography variant='h6' gutterBottom>
            3. On a scale of 1-5, how important is sustainable living to you now? 1 being not important at all, 5 being extremely important
            </Typography>
            <Box sx={{ minWidth: 100, width: 100, margin: 5 }}>
                <Typography variant="body1" align="center">
                    4
                </Typography>
            </Box>
            </div>
            <div style={{display: 'flex', flex: 'row', padding: 10 }}>
            <Typography variant='h6' gutterBottom>
            4. On a scale of 1-5, to what extent do you think volunteering with GUI has contributed to your understanding of sustainability? 1 being not at all, 5 being a lot
            </Typography>
            <Box sx={{ minWidth: 100, width: 100, margin: 5 }}>
                <Typography variant="body1" align="center">
                    4
                </Typography>
            </Box>
            </div>
            <div style={{ padding: 10 }}>
            <Typography variant='h6' gutterBottom>
            5. Please tick the activities you regularly partake in on your own.
            </Typography>
            <FormGroup gutterBottom>
            <FormControlLabel control={<Checkbox disabled checked />} label="Woodworking"/>
                <FormControlLabel control={<Checkbox disabled checked />} label="Gardening/Growing own vegetables" />
                <FormControlLabel control={<Checkbox disabled unchecked />} label="Upcycling used clothes" />
                <FormControlLabel control={<Checkbox disabled unchecked />} label="Other green activities (share with us in the forum!)" />
            </FormGroup>
            </div>
        </Box>
    )
    }
