import React from 'react';
import '../styles/Form.css'

function Form() {
    return(
        <div className = "form-container">
            <div className="search">
                <input type="text" className="search-field" placeholder="Название города"/>
                <i className="fas fa-search-location search-icon"></i>
            </div>
            <button className="local-weather-btn"><i className="fas fa-home"></i></button>
        </div>
    );
}

export default Form;