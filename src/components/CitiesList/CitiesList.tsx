import React from 'react';
import List from '@mui/material/List';
import { CitiesCard } from '../CitiesCard/CitiesCard';

export const CitiesList = () => {
  console.log('test');
  return (
    <List
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      {[1, 2, 3, 4].map((item) => (
        <CitiesCard />
      ))}
    </List>
  );
};
