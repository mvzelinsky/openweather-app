import React from 'react';
import '../styles/weather.css'
import 'weather-icons/css/weather-icons.css'

function Weather() {
    return(
        <div className = "weather-container">
            <div className="weather-icon">
                <i className="wi wi-fog"></i>
            </div>
            <div className="">
                <div className="weather-info">
                    <div className="city">Saint-Petersburg</div>
                    <div className="degrees">15 &deg;C</div>
                    <div className="today">Friday, 12:00</div>
                </div>
            </div>
        </div>
    );
}

export default Weather;