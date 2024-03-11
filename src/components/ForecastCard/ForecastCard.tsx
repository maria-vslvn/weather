import { format } from 'date-fns';
import { CELSIUS, DATE_FORMAT_MAIN, FAREGHEIT, KELVIN, TIME_FORMAT, WEATHER_PATH } from '../../constsWeather';
import { Card } from '../Card';
import { CityForm } from 'components';
import { convertTemperature } from '../../utils';
import React, { useState } from 'react';
import { useTypedSelector } from '../../hooks';
import { weatherDataSelector } from '../../redux/selectors/dataSelectors';

interface CardProps {
  data: any;
  onSubmitWeather: any;
  isPending: boolean;
}

export const ForecastCard = ({ onSubmitWeather, isPending }: CardProps) => {
  const weatherData = useTypedSelector(weatherDataSelector);
  const [transformedTemperature, setTransformedTemperature] = useState<string | null>(null);
  const today = format(new Date(), DATE_FORMAT_MAIN);
  const toTime = format(new Date(), TIME_FORMAT);

  const handleToggleTemp = (e: any) => setTransformedTemperature(e.target.value);
  return (
    <Card fullWidth>
      <div className="col-12">
        <div className="row">
          <div className={'col-12'}>
            <div className={'row'}>
              <div className="col-12">
                <div className="txt-md">Fill in city</div>
              </div>
              <div className={'col-12 col-md-5'}>
                <CityForm onSubmit={onSubmitWeather} />
              </div>
              <div className={'col-12 col-md-7'}></div>
            </div>
          </div>
        </div>
        {isPending && <p>Loading...</p>}
        {weatherData && (
          <div className="row mt-6">
            <div className={'col-12 col-md-4'}>
              <p className={'txt txt-md'}>{`${weatherData.name}${
                weatherData.sys.country ? `, ${weatherData.sys.country}` : ''
              }`}</p>
              <p className={'txt txt-md'}>{today}</p>
              <p className={'txt txt-md mb-4'}>{toTime}</p>
            </div>
            <div className={'col-12 col-md-4'}>
              <div className={'flex-column'}>
                <div className={'align-items-end gap-4'}>
                  {weatherData.weather[0].icon && (
                    <img
                      src={`${WEATHER_PATH}/img/wn/${weatherData.weather[0].icon}@2x.png`}
                      alt={weatherData.weather[0].main}
                    />
                  )}
                  <div className={'txt-card'}>
                    {convertTemperature(weatherData.main.temp, transformedTemperature || KELVIN)}
                    {transformedTemperature === CELSIUS ? '°C' : transformedTemperature === FAREGHEIT ? '°F' : '°K'}
                  </div>
                </div>
                <div className={'align-items-center'}>
                  <button
                    onClick={handleToggleTemp}
                    value={CELSIUS}
                    className={`btn-icon btn ${transformedTemperature === CELSIUS ? 'active' : ''}`}>
                    {CELSIUS}
                  </button>
                  <button
                    onClick={handleToggleTemp}
                    value={FAREGHEIT}
                    className={`btn-icon btn ${transformedTemperature === FAREGHEIT ? 'active' : ''}`}>
                    {FAREGHEIT}
                  </button>
                  <button
                    onClick={handleToggleTemp}
                    value={KELVIN}
                    className={`btn-icon btn ${
                      transformedTemperature === KELVIN || !transformedTemperature ? 'active' : ''
                    }`}>
                    {KELVIN}
                  </button>
                </div>
              </div>
              <div className={'flex-column mt-8'}>
                <p className={'txt txt-md'}>{`${weatherData.weather ? `${weatherData.weather[0].main}, ` : ''}${
                  weatherData.weather ? weatherData.weather[0].description : ''
                }`}</p>
                {weatherData.main.temp && <p className={'txt txt-md'}>Temp: {weatherData.main.temp}</p>}
              </div>
            </div>
            <div className={'col-12 col-md-4'}>
              <div className={'align-items-center justify-content-between'}>
                <p className={'txt txt-md'}>Humidity:</p>
                {weatherData.main.humidity && <p className={'txt txt-md'}>{`${weatherData.main.humidity}%`}</p>}
              </div>
              <div className={'align-items-center justify-content-between'}>
                <p className={'txt txt-md'}>Feels like:</p>
                <p className={'txt txt-md'}>{weatherData.main.feels_like}</p>
              </div>
              <div className={'align-items-center justify-content-between'}>
                <p className={'txt txt-md'}>Max:</p>
                <p className={'txt txt-md'}>{weatherData.main.temp_max}</p>
              </div>
              <div className={'align-items-center justify-content-between'}>
                <p className={'txt txt-md'}>Min:</p>
                <p className={'txt txt-md'}>{weatherData.main.temp_min}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
