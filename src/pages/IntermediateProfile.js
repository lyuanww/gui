import { CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import { Card, CardContent, Stack } from "@mui/material";
import React from "react";
import oneTree from "../images/onetree.png";
import threeTrees from "../images/threetrees.png";
import cow from "../images/cow.png";
import watermelon from "../images/watermelon.jpg";
import fiveTrees from "../images/fivetrees.png";
import tenTrees from "../images/tentrees.png";
import Avatar from "@mui/material/Avatar";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import levelOneFarm from "../images/level1farm.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import SurveyFixed from "../components/SurveyFixed";
import SurveyFixedAfter from "../components/SurveyFixedAfter";
import Journal from "../components/Journal";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 15,
    },
  }));

export default function IntermediateProfile() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{flexDirection:"column", pb: 2}}>
        <Typography variant="h4" sx={{textAlign:"center", mb:2}}>
            Profile
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ p: 4, overflow: "hidden", flexDirection: "row"}}
        >
          <Grid container sx={{ p: 3 }} xs={8}>
            <Stack spacing={3} flex="1 1 0">
              <Card sx={{ p: 4, border:"solid", backgroundColor:"#e4ebed"}}>
                <Typography variant="h4" sx={{textAlign:"center", mb:2}}>Profile</Typography>
                <CardContent>
                  
                  <Box sx={{ display: "flex", columnGap: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold" }}
                      gutterBottom
                    >
                      Name:
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      Intermediate
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", columnGap: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold" }}
                      gutterBottom
                    >
                      Email:
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      intermediate@gmail.com
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", columnGap: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold" }}
                      gutterBottom
                    >
                      Level:
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      13
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", columnGap: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold" }}
                      gutterBottom
                    >
                      Start Date:
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      25 March 2021
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
              <Card sx={{ p: 4, border:"solid", backgroundColor:"#e4ebed" }}>
                <Typography variant="h4" sx={{textAlign:"center", mb:2}}>Your Farm</Typography>
                <CardMedia component="img" height="300" image={levelOneFarm} />
              </Card>
            </Stack>
          </Grid>
  
          <Grid container item xs={4}>
            <Card sx={{width:"100%", border:"solid", backgroundColor:"#e4ebed"}}>
              <CardContent>
                <Typography variant="h4" sx={{textAlign:"center", mb:2}}>Achievements</Typography>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <Card>
                      <CardContent
                        sx={{ justifyContent: "center", display: "flex" }}
                      >
                        <LightTooltip
                          title="You have reached level one tree!"
                          arrow
                        >
                          <Avatar
                            sx={{
                              border: "solid",
                              borderColor: "green",
                              height: "80px",
                              width: "80px",
                            }}
                            alt="oneTree"
                            src={oneTree}
                          />
                        </LightTooltip>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card>
                      <CardContent
                        sx={{ justifyContent: "center", display: "flex" }}
                      >
                        <LightTooltip
                          title="You have planted 3 trees! Keep it up!"
                          arrow
                        >
                          <Avatar
                            sx={{
                              border: "solid",
                              borderColor: "green",
                              height: "80px",
                              width: "80px",
                            }}
                            alt="threeTrees"
                            src={threeTrees}
                          />
                        </LightTooltip>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card>
                      <CardContent
                        sx={{ justifyContent: "center", display: "flex" }}
                      >
                        <LightTooltip title="You have saved 1 cow!" arrow>
                          <Avatar
                            sx={{
                              border: "solid",
                              borderColor: "green",
                              height: "80px",
                              width: "80px",
                            }}
                            alt="cow"
                            src={cow}
                          />
                        </LightTooltip>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card>
                      <CardContent
                        sx={{ justifyContent: "center", display: "flex" }}
                      >
                        <LightTooltip
                          title="First day planting fruits!"
                          arrow
                        >
                          <Avatar
                            sx={{
                              border: "solid",
                              borderColor: "green",
                              height: "80px",
                              width: "80px",
                            }}
                            alt="watermelon"
                            src={watermelon}
                          />
                        </LightTooltip>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card>
                      <CardContent
                        sx={{ justifyContent: "center", display: "flex" }}
                      >
                        <LightTooltip
                          title="You have planted 5 trees! Good job!"
                          arrow
                        >
                          <Avatar
                            sx={{
                              border: "solid",
                              borderColor: "green",
                              height: "80px",
                              width: "80px",
                            }}
                            alt="fiveTrees"
                            src={fiveTrees}
                          />
                        </LightTooltip>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card>
                      <CardContent
                        sx={{ justifyContent: "center", display: "flex" }}
                      >
                        <LightTooltip
                          title="You have planted 10 trees! Awesome!"
                          arrow
                        >
                          <Avatar
                            sx={{
                              border: "solid",
                              borderColor: "green",
                              height: "80px",
                              width: "80px",
                            }}
                            alt="tenTrees"
                            src={tenTrees}
                          />
                        </LightTooltip>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Card sx={{ m:5,border:"solid", backgroundColor:"#e4ebed" }}>
          <Box sx={{ m:5, borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Environment Journal" {...a11yProps(0)} />
              <Tab label="Initial Survey" {...a11yProps(1)} />
              <Tab label="Reflection Survey" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Journal/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <SurveyFixed/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <SurveyFixedAfter/>
          </CustomTabPanel>
        </Card>
      </Box>
    );
}
