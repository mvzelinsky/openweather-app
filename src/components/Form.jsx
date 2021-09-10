import React from 'react';
import '../styles/Form.css'

function Form(props) {
    return(
        <div className = "form-container">
            <form onSubmit = {props.loadweather}>
                <div className="search">
                    <input type="text" className="search-field" name="city" placeholder="Название города"/>
                    <i className="fas fa-search-location search-icon"></i>
                </div>
                    <button className="local-weather-btn">Search</button>
            </form>
        </div>
    );
}

export default Form;