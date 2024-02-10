import React from 'react';
import Box from '@mui/material/Box';
import { Typography, InputLabel, MenuItem, FormControl, Select, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export default function SurveyAfter() {
    const [q1, setQ1] = React.useState('');
    const handleChangeQ1 = (event) => {
        setQ1(event.target.value);
    };

    const [q2, setQ2] = React.useState('');
    const handleChangeQ2 = (event) => {
        setQ2(event.target.value);
    };

    const [q3, setQ3] = React.useState('');
    const handleChangeQ3 = (event) => {
        setQ3(event.target.value);
    };

    const [q4, setQ4] = React.useState('');
    const handleChangeQ4 = (event) => {
        setQ4(event.target.value);
    };

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
            <Box sx={{ minWidth: 100, width: 100, margin: 5,}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">1-5</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={q1}
                    label="Rating"
                    onChange={handleChangeQ1}
                    >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            </div>
            <div style={{display: 'flex', flex: 'row', padding: 10 }}>
            <Typography variant='h6' gutterBottom>
                2. On a scale of 1-5, how comfortable are you with engaging in farm work and woodwork activities now? 1 being not comfortable at all, 5 being extremely comfortable
            </Typography>
            <Box sx={{ minWidth: 100, width: 100, margin: 5,}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">1-5</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={q2}
                    label="Rating"
                    onChange={handleChangeQ2}
                    >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            </div>
            <div style={{display: 'flex', flex: 'row', padding: 10 }}>
            <Typography variant='h6' gutterBottom>
            3. On a scale of 1-5, how important is sustainable living to you now? 1 being not important at all, 5 being extremely important
            </Typography>
            <Box sx={{ minWidth: 100, width: 100, margin: 5,}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">1-5</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={q3}
                    label="Rating"
                    onChange={handleChangeQ3}
                    >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            </div>
            <div style={{display: 'flex', flex: 'row', padding: 10 }}>
            <Typography variant='h6' gutterBottom>
            4. On a scale of 1-5, to what extent do you think volunteering with GUI has contributed to your understanding of sustainability? 1 being not at all, 5 being a lot
            </Typography>
            <Box sx={{ minWidth: 100, width: 100, margin: 5,}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">1-5</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={q4}
                    label="Rating"
                    onChange={handleChangeQ4}
                    >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            </div>
            <div style={{ padding: 10 }}>
            <Typography variant='h6' gutterBottom>
            5. Please tick the activities you regularly partake in on your own.
            </Typography>
            <FormGroup gutterBottom>
                <FormControlLabel control={<Checkbox />} label="Woodworking" />
                <FormControlLabel control={<Checkbox />} label="Gardening/Growing own vegetables" />
                <FormControlLabel control={<Checkbox />} label="Upcycling used clothes" />
                <FormControlLabel control={<Checkbox />} label="Other green activities (share with us in the forum!)" />
            </FormGroup>
            </div>
            <Typography variant="h5">
                Thank you for filling up our survey! Click submit to continue confirm your participation!
            </Typography>
            
        </Box>
    )
    }
