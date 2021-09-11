import React, { Component } from 'react';
import '../styles/Forecast.css';

export default class DailyForecastCard extends Component {
  render() {
    return (
      <div>
        <div className="daily">
          <div className="date-block">
            <div className="weekday">Today</div>
            <div className="date">11.09</div>
          </div>
          <div className="temp">
            <div className="icon">
              <i className="wi wi-owm-501"></i>
            </div>
            <div className="day-temp">
              18
              <i className="wi wi-celsius"></i>
            </div>
            <div className="night-temp">
              14
              <i className="wi wi-celsius"></i>
            </div>
          </div>
          <div className="weather-description daily-text">Broken clouds</div>
          <div className="daily-humidity">
            <i className="wi wi-humidity mr10"></i>
            <span className="daily-text">76</span>
          </div>
        </div>
      </div>
    );
  }
}
