
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Journal() {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h3" gutterBottom>
                Journal
            </Typography>
            <Typography variant="h6" gutterBottom>
                This is your journal
            </Typography>
        </Box>
    )
    }
