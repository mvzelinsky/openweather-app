import React from 'react';
import Form from './Form'
import Weather from './Weather';
import '../styles/SidePanel.css'

function SidePanel() {
    return(
        <div className = "side-panel">
            <Form />
            <Weather/>
        </div>
    );
}

export default SidePanel;