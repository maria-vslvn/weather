import React from 'react';
import { useAppDispatch } from './redux/store';
import { getWeatherData } from './api/weatherApi';
import { ForecastCard } from './components';
import { useTypedSelector } from './hooks';
import { isDataPendingSelector, weatherDataSelector } from './redux/selectors/dataSelectors';
import { Layout } from './components/Layout';

function App() {
  const dispatch = useAppDispatch();
  const weatherData = useTypedSelector(weatherDataSelector);
  const isPendingData = useTypedSelector(isDataPendingSelector);

  const handleSubmit = (data: any) => {
    const { city } = data;
    dispatch(getWeatherData(city));
  };

  return (
    <Layout>
      <ForecastCard isPending={isPendingData} onSubmitWeather={handleSubmit} data={weatherData} />
    </Layout>
  );
}

export default App;
