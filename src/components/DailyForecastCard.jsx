import React, { Component } from 'react';
import '../styles/Forecast.css';

const DailyForecastCard = (props) => {
  return (
    <div>
      <div className="daily">
        <div className="date-block">
          <div className="weekday">{getWeekDay(props.dt)}</div>
          <div className="date">{getCurrentTimeFromStamp(props.dt)}</div>
        </div>
        <div className="temp">
          <div className="icon">
            <i className={`wi wi-owm-${props.weather[0].id}`}></i>
          </div>
          <div className="day-temp">
            {calcTemp(props.temp.max)}
            <i className="wi wi-celsius"></i>
          </div>
          <div className="night-temp">
            {calcTemp(props.temp.min)}
            <i className="wi wi-celsius"></i>
          </div>
        </div>
        <div className="weather-description daily-text">{props.weather[0].description}</div>
        <div className="daily-humidity">
          <i className="wi wi-humidity mr10"></i>
          <span className="daily-text">{props.humidity}</span>
        </div>
      </div>
    </div>
  );

  function calcTemp(temp) {
    return Math.floor(temp - 273.15);
  }

  function getCurrentTimeFromStamp(timestamp) {
    let d = new Date(timestamp * 1000);
    let day = d.getDate();
    let month = d.getMonth();
    if (month / 10 < 1) {
      month = '0' + month.toString();
    }
    return day + '.' + month;
  }

  function getWeekDay(timestamp) {
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];
    let days = ['Today', 'Tomorrow'];
    let d = new Date(timestamp * 1000);
    let today = new Date();

    if (today.getDate() === d.getDate()) {
      return days[0];
    } else if (today.getDate() + 1 === d.getDate()) {
      return days[1];
    } else {
      return week[d.getDay()];
    }
  }
};

export default DailyForecastCard;
