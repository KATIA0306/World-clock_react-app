import React, { Component } from 'react';

class WeatherApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weather: null,
        }
    }

    componentWillMount() {
        let url = "http://api.openweathermap.org/data/2.5/weather?q=" + 
            this.props.city + "&APPID=8c5b85cca00dff021b47806919761f8d";

        return fetch(url, {mode: 'cors'})
        .then((response) => {
            return response.json()
        }).then((response) => {
            this.setState({
                weather: response
            })
        });
    }

    render () {
        let data = null;
        if (this.state.weather) {
            data = (
                <div id="weatherText">
                <p className="text-center weather">{this.state.weather.weather[0].description}</p>
                <p className="text-center degree">Temperature is {Math.floor(this.state.weather.main.temp - 273)} Celsius degrees</p>

                </div>
            );
        }
        return (
            <div>
                {data}
            </div>
        )
    }
}

export default WeatherApp;