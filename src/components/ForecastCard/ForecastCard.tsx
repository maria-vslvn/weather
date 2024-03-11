import { format } from 'date-fns';
import { CELSIUS, DATE_FORMAT_MAIN, FAREGHEIT, KELVIN, TIME_FORMAT, WEATHER_PATH } from '../../constsWeather';
import { Card } from '../Card';
import { CityForm } from 'components';
import { convertTemperature } from '../../utils';
import React, { useState } from 'react';

interface CardProps {
  data: any;
  onSubmitWeather: any;
  isPending: boolean;
}

export const ForecastCard = ({ data, onSubmitWeather, isPending }: CardProps) => {
  const [transformedTemperature, setTransformedTemperature] = useState<string>(data?.main.temp || '');
  const today = format(new Date(), DATE_FORMAT_MAIN);
  const toTime = format(new Date(), TIME_FORMAT);

  const handleToggleTemp = (e: any) => setTransformedTemperature(e.target.value);
  return (
    <Card fullWidth>
      <div className="col-12">
        <div className="row">
          <div className={'col-12'}>
            <div className={'row'}>
              <div className={'col-12 col-md-5'}>
                <CityForm onSubmit={onSubmitWeather} />
              </div>
              <div className={'col-12 col-md-7'}></div>
            </div>
          </div>
        </div>
        {isPending && <p>Loading...</p>}
        {data && (
          <div className="row mt-6">
            <div className={'col-12 col-md-4'}>
              <p className={'txt txt-md'}>{`${data.name}${data.sys.country ? `, ${data.sys.country}` : ''}`}</p>
              <p className={'txt txt-md'}>{today}</p>
              <p className={'txt txt-md mb-4'}>{toTime}</p>
            </div>
            <div className={'col-12 col-md-4'}>
              <div className={'flex'}>
                <div className={'align-items-end gap-4'}>
                  {data.weather[0].icon && (
                    <img src={`${WEATHER_PATH}/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].main} />
                  )}
                  <div className={'txt-card'}>{convertTemperature(data.main.temp, transformedTemperature)}</div>
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
                    className={`btn-icon btn ${transformedTemperature === KELVIN ? 'active' : ''}`}>
                    {KELVIN}
                  </button>
                </div>
              </div>
              <div className={'flex-column mt-8'}>
                <p className={'txt txt-md'}>{`${data.weather ? `${data.weather[0].main}, ` : ''}${
                  data.weather ? data.weather[0].description : ''
                }`}</p>
                {data.main.temp && <p className={'txt txt-md'}>Temp: {data.main.temp}</p>}
              </div>
            </div>
            <div className={'col-12 col-md-4'}>
              <div className={'align-items-center justify-content-between'}>
                <p className={'txt txt-md'}>Humidity:</p>
                {data.main.humidity && <p className={'txt txt-md'}>{`${data.main.humidity}%`}</p>}
              </div>
              <div className={'align-items-center justify-content-between'}>
                <p className={'txt txt-md'}>Feels like:</p>
                <p className={'txt txt-md'}>{data.main.feels_like}</p>
              </div>
              <div className={'align-items-center justify-content-between'}>
                <p className={'txt txt-md'}>Max:</p>
                <p className={'txt txt-md'}>{data.main.temp_max}</p>
              </div>
              <div className={'align-items-center justify-content-between'}>
                <p className={'txt txt-md'}>Min:</p>
                <p className={'txt txt-md'}>{data.main.temp_min}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
