import React from 'react';
import '../styles/Form.css'

function Form() {
    return(
        <div className = "form-container">
            <div className="search">
                <input type="text" class="search-field" placeholder="Название города"/>
                <i class="fas fa-search-location search-icon"></i>
            </div>
            <button class="local-weather-btn"><i class="fas fa-home"></i></button>
        </div>
    );
}

export default Form;