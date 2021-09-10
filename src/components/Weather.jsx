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
                <div className="city">Saint-Petersburg</div>
                <div className="degrees">15 <i className="wi wi-celsius"></i></div>
                <div className="today">Friday, 12:00</div>
            </div>
            <div className="weather-description">
                <div className="clouds">
                    <i className="wi wi-cloud"></i>
                    <span>Облачно</span>
                </div>
                <div className="rain-probability">
                    <i className="wi wi-rain"></i>
                    <span>30%</span>
                </div>
            </div>
        </div>
    );
}

export default Weather;