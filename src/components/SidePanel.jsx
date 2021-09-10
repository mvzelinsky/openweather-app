import React from 'react';
import Form from './Form'
import Weather from './Weather';
import '../styles/SidePanel.css'

const API_key = '035ff54a0c801aec6c5a58f7c8a2d065';

class SidePanel extends React.Component{
    
    constructor(){
        super();
        this.state = {
            city: undefined,
            icon: undefined,
            main: {
                feels_like: undefined,
                humidity: undefined,
                pressure: undefined,
                temp: undefined
            },
            wind: {
                deg: undefined,
                speed: undefined
            },
            description: '',
            errror: false
        };
    }

    getCurrentWeather = async (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);

        const response = await api_call.json();

        console.log(response);

        this.setState({
            city: `${response.name}, ${response.sys.country}`,
            icon: response.weather[0].id,
            main: {
                feels_like: response.main.feels_like,
                humidity: response.main.humidity,
                pressure: response.main.pressure,
                temp: response.main.temp
            },
            description: response.weather[0].description,
            wind: {
                deg: response.wind.deg,
                speed: response.wind.speed
            }
        })
    }

    render(){
        return(
            <div className = "side-panel">
                <Form loadweather = {this.getCurrentWeather}/>
                <Weather city={this.state.city}
                         icon = {this.state.icon}
                         temp = {this.state.main.temp}
                         feels_like = {this.state.main.feels_like}
                         description = {this.state.description}
                         wind_speed = {this.state.wind.speed}
                         humidity = {this.state.main.humidity}
                         pressure = {this.state.main.pressure}/>
            </div>
        );
    }
}

export default SidePanel;