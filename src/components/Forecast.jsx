import React from 'react';
import '../styles/Forecast.css';
import DailyForecastCard from './DailyForecastCard';

function Forecast() {
  return (
    <div className="forecast">
      <DailyForecastCard />
      <DailyForecastCard />
      <DailyForecastCard />
      <DailyForecastCard />
      <DailyForecastCard />
      <DailyForecastCard />
      <DailyForecastCard />
      <DailyForecastCard />
    </div>
  );
}

export default Forecast;
