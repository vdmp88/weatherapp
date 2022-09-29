import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { City } from '../../interfaces/city';

type Props = {
  city: City;
};

export const CitiesCard: React.FC<Props> = ({ city }) => {
  const { name, country, population } = city;

  return (
    <Card sx={{ maxWidth: '280px', width: '24%', margin: '0 10px 10px' }}>
      <CardContent>
        <Typography>City name: {name} </Typography>
        <Typography>Country: {country}</Typography>
        <Typography>Population: {population}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
