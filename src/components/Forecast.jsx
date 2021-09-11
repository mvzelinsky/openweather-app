import React from 'react';
import '../styles/Forecast.css';
import DailyForecastCard from './DailyForecastCard';

function Forecast(props) {
  console.log(props.forecast);
  return (
    <div className="forecast">
      {props.forecast.map((object) => (
        <DailyForecastCard key={object.dt} {...object} />
      ))}
    </div>
  );
}

export default Forecast;
