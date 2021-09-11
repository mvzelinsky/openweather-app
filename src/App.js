import React from 'react';
import SidePanel from './components/SidePanel';
import MainPanel from './components/MainPanel';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      coord: {
        lon: null,
        lat: null,
      },
    };
  }

  getCoords = (coord) => {
    console.log(coord);
    this.setState({
      coord: {
        lon: coord.lon,
        lat: coord.lat,
      },
    });
  };

  render() {
    return (
      <div className="App">
        <SidePanel loadCoords={this.getCoords} />
        <MainPanel />
      </div>
    );
  }
}

export default App;
