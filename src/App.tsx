import React, { useEffect } from 'react';
import { useGetCitiesQuery } from './services/CitiesService';
import './main.scss';
import { CitiesList } from './components/CitiesList/CitiesList';

function App() {
  const { data: response, isError, isLoading } = useGetCitiesQuery('');

  useEffect(() => {
    console.log('test', response);
  }, [response]);

  return (
    <div className="App">
      <div className="container">
        <CitiesList />
      </div>
    </div>
  );
}

export default App;
