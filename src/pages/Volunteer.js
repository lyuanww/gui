import React from "react";

import Typography from '@mui/material/Typography'

import VolunteerOpps from "./VolunteerOpps";

export default function Volunteer() {

  const volunteeringOpps = [
    {name: 'GUI Balik Kampung Volunteer Programme (GBK)', imageUrl: 'https://groundupinitiative.org/wp-content/uploads/2021/03/20161210_102800.png' },
    {name: 'GUI Volunteer Programme (GVP)', imageUrl: 'https://groundupinitiative.org/wp-content/uploads/2021/03/20180117_143719-540x326-1.png' },
  ];
  return (
    <div style={{width: 'fit content', paddingTop: 10}}>
      <div>    
        <Typography variant="h5" sx={{textAlign:"center", mb:2}}>
        Volunteering Opportunities
        </Typography>
      </div>
      <div style={{  display: 'flex', flex: 'row', alignItems: 'center', padding: 10, flexWrap: 'wrap'}}>
      {volunteeringOpps.map((volunteeringOpps) => (
        <VolunteerOpps
          name={volunteeringOpps.name}
          imageUrl={volunteeringOpps.imageUrl}
        />
      ))}
      </div>
    </div>
  );
}
