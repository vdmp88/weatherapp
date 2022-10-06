import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CircularProgress } from '@mui/material';
import { useFetchDateWeatherQuery } from '../../services/WeatherService';
import { City } from '../../types/city';

type Props = {
  city: City;
};

export const CitiesCard: React.FC<Props> = ({ city }) => {
  const { latitude, longitude } = city;
  const { data, isLoading } = useFetchDateWeatherQuery(
    { latitude, longitude },
    {
      skip: !city,
    },
  );

  return (
    <Card className="card card--weather">
      {isLoading && (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}
      {data && (
        <>
          <CardContent style={{ padding: 0 }}>
            <Typography className="card__title">{data?.name}</Typography>
            <Typography className="card__description">
              {data?.sys.country}
            </Typography>
            <Typography className="card__information">
              {Math.floor(data?.main.temp)} °
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              padding: 0,
              display: 'flex',
              flexGrow: '1',
            }}
          >
            <Button className="button button--small">Learn More</Button>
          </CardActions>
        </>
      )}
    </Card>
  );
};
