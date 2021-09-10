import React from 'react';
import '../styles/weather.css'
import 'weather-icons/css/weather-icons.css'
import 'weather-icons/css/weather-icons-wind.css'


function Weather(props) {
    return(
        <div className = "weather-container">
            <div className="weather-icon">
                <i className={`wi wi-owm-${props.icon}`}></i>
            </div>
            <div className="weather-info">
                <div className="city">{props.city}</div>
                <div className="degrees">{calcTemp(props.temp)}<i className="wi wi-celsius"></i></div>
                <div className="description">{toUpperCaseFirst(props.description)}</div>
                <div className="feels-like">Feels like: {calcTemp(props.feels_like)}<i className="wi wi-celsius"></i></div>
            </div>
            <div>
                <div className="wind">
                    <i className="wi wi-strong-wind"></i>
                    {props.wind_speed} m/s 
                    <i className="wi wi-wind wi-from-s direction"></i>
                </div>
                <div className="humidity">
                    <i className="wi wi-humidity"></i>
                    {props.humidity} %
                </div>
                <div className="pressure">
                    <i className="wi wi-barometer"></i>
                    {calcPressure(props.pressure)} mmHg
                </div>
            </div>
        </div>
    );
}

function calcTemp(temp){
    return Math.floor(temp - 273.15);
}

function calcPressure(pressure){
    return (pressure*0.750062).toFixed(2)
}

function toUpperCaseFirst(str){
    if (str){
        return str[0].toUpperCase() + str.slice(1);
    }
}

export default Weather;