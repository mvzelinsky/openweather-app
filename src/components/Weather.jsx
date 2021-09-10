import React from 'react';
import '../styles/weather.css'
import 'weather-icons/css/weather-icons.css'

function Weather() {
    return(
        <div className = "weather-container">
            <div className="weather-icon">
                <i className="wi wi-fog"></i>
            </div>
            <div className="weather-info">
                <div className="city">Yaroslavl, RU</div>
                <div className="degrees">15 <i className="wi wi-celsius"></i></div>
                <div className="feels-like">16.24 <i className="wi wi-celsius"></i></div>
            </div>
            <div className="description">
                <div className="clouds">
                    <i className="wi wi-cloud"></i>
                    <span>scattered clouds</span>
                </div>
                <div className="wind">
                    <i className="wi wi-strong-wind"></i>
                    <span>3</span> m/s (gust <span>5.1</span> m/s)
                </div>
                <div className="humidity">
                    <i className="wi wi-humidity"></i>
                    <span>78%</span>
                </div>
                <div className="pressure">
                    <i className="wi wi-barometer"></i>
                    <span>1005</span>
                </div>
            </div>
        </div>
    );
}

export default Weather;