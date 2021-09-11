import React from 'react';
import Forecast from './Forecast';
import '../styles/MainPanel.css';

const API_key = '035ff54a0c801aec6c5a58f7c8a2d065';

class MainPanel extends React.Component {
  constructor() {
    super();

    this.state = {
      forecast: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.coord.lon !== prevProps.coord.lon) {
      this.getDailyForecast();
    }
  }

  getDailyForecast = async () => {
    const lon = this.props.coord.lon;
    const lat = this.props.coord.lat;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts,current&appid=${API_key}`,
    );
    const response = await api_call.json();

    this.setState({
      forecast: [...response.daily],
    });
  };
  render() {
    return (
      <div className="main-panel">
        <Forecast forecast={this.state.forecast} />
      </div>
    );
  }
}

export default MainPanel;
