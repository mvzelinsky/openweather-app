import React from 'react';
import Forecast from './Forecast';
import '../styles/MainPanel.css';

const API_key = '035ff54a0c801aec6c5a58f7c8a2d065';

class MainPanel extends React.Component {
  componentDidUpdate() {
    this.getDailyForecast();
  }

  getDailyForecast = async () => {
    console.log(this.props);
    const lon = this.props.coord.lon;
    const lat = this.props.coord.lat;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts,current&appid=${API_key}`,
    );

    const response = await api_call.json();

    console.log(response);
  };
  render() {
    return (
      <div className="main-panel">
        <Forecast />
      </div>
    );
  }
}

export default MainPanel;
