import { CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import { Card, CardContent, Stack } from "@mui/material";
import React from "react";
import oneTree from "../images/onetree.png";
import threeTrees from "../images/threetrees.png";
import cow from "../images/cow.png";
import Avatar from "@mui/material/Avatar";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import levelOneFarm from "../images/level1farm.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

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

export default function Profile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{bgcolor:"green", flexDirection:"column", pb: 2}}>
      <Grid
        container
        spacing={2}
        sx={{ p: 4, overflow: "hidden", flexDirection: "row"}}
      >
        <Grid container sx={{ p: 3 }} xs={8}>
          <Stack spacing={3} flex="1 1 0">
            <Card sx={{ p: 4 }}>
              <CardHeader title="Profile" />
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
                    Newbie
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
                    newbie@gmail.com
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
                    1
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
                    2021-10-01
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            <Card sx={{ p: 4 }}>
              <CardHeader title="Your farm" />
              <CardMedia component="img" height="300" image={levelOneFarm} />
            </Card>
          </Stack>
        </Grid>

        <Grid container item xs={4}>
          <Card>
            <CardHeader title="Badges" />
            <CardContent>
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
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Card sx={{ m:5, p: 3 }}>
        <Box sx={{ m:5, borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Card>
    </Box>
  );
}