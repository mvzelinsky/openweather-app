import React from 'react';
import Forecast from './Forecast';
import Highlights from './Highlights';
import '../styles/MainPanel.css';

function MainPanel() {
  return (
    <div className="main-panel">
      <Forecast />
      <Highlights />
    </div>
  );
}

export default MainPanel;
