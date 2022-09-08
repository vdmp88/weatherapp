import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const CitiesCard = () => (
  <Card sx={{ maxWidth: '280px', width: '24%' }}>
    <CardContent>
      <Typography>City name</Typography>
      <Typography>City info</Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);
