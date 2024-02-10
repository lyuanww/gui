import React, { useState } from "react";

import Box from '@mui/material/Box';
import { Button, ButtonGroup, Modal, Typography, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/AddCircle'
import Survey from '../components/Survey'

const VolunteerOpps = ({ name, imageUrl }) => {
    const [showSurveyModal, setShowSurveyModal] = useState(false);
    const toggleModal = () => {
      setShowSurveyModal(!showSurveyModal);
    };
    const [showEnterPasscode, setShowEnterPasscode] = useState(false);
    const [count, setCount] = useState(0);

    return(
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            bgcolor: 'background.paper',
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: 1,
            fontWeight: 'bold',
            backgroundColor: '#e4ebed',
            padding: '10px'
          }} 
          width={500}
          margin={5}
        >
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt={name}
            src={imageUrl}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              m: 3,
              minWidth: { md: 10 },
            }}
          >
            <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
              {name}
            </Box>
            <Box sx={{mt:1.5}}>
              <Button
                onClick={() => {toggleModal()}} 
                style={{backgroundColor: "#5f857a", marginLeft: 'auto',}}
                variant="contained"
              >Sign up</Button>
                <Modal open={showSurveyModal} style={{display: "flex", justifyContent: "center", overflow: 'scroll'}}>
                    <Box sx={{ p: 4, border:"solid", backgroundColor:"#e4ebed", alignItems: 'center', overflow: 'scroll'}}>
                        <Survey />
                        <Button onClick={() => {toggleModal()}} 
                        style={{backgroundColor: "#5f857a", marginLeft: 'auto', float: 'right'}}
                        variant="contained">
                        Submit
                        </Button>
                    </Box>
                </Modal>
            </Box>
            <Typography style={{marginTop: '10px'}}>
              Number of participations
            </Typography>
            <Box style={{display: 'flex', alignItems: 'center'}}>
              <Typography style={{backgroundColor: '#f5faf6', width:'150px', padding:'5px'}}>
                {count}
              </Typography>
              <Button onClick = {() => setShowEnterPasscode(true)} sx={{ color: '#5f857a' }}>
                <AddIcon/>
              </Button>
            </Box>
              <Modal open={showEnterPasscode} style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                <Box sx={{ p: 4, border:"solid", backgroundColor:"#e4ebed", alignItems: 'center'}}>
                  <Typography style={{marginTop: '10px'}}>
                      Please Enter Passcode:
                  </Typography>
                  <TextField id="filled-basic" label="Passcode" variant="filled" />
                  <Button onClick = {() => {setShowEnterPasscode(false); setCount(count+1)}} sx={{ color: '#5f857a' }}>
                    Submit
                  </Button>
                </Box>
              </Modal>
        </Box>
        </Box>
    );
}

export default VolunteerOpps;