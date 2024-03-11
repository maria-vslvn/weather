import React, { useState } from 'react';
import { useAppDispatch } from './redux/store';
import { getWeatherData } from './api/weatherApi';
import { ForecastCard } from './components';
import { useTypedSelector } from './hooks';
import { isDataPendingSelector } from './redux/selectors/dataSelectors';
import { Layout } from './components/Layout';
import { type FormSubmitHandler } from './models';

function App() {
  const dispatch = useAppDispatch();
  const isPendingData = useTypedSelector(isDataPendingSelector);
  const [weatherData, setWeatherData] = useState<any | null>(null);

  const handleSubmit: FormSubmitHandler<{ city: string }> = (data: any, { setError }) => {
    const { city } = data;

    dispatch(getWeatherData(city))
      .unwrap()
      .then((res) => setWeatherData(res.data))
      .catch((error) => setError && setError('city', error.response.data));
  };

  return (
    <Layout>
      <ForecastCard isPending={isPendingData} onSubmitWeather={handleSubmit} data={weatherData} />
    </Layout>
  );
}

export default App;
