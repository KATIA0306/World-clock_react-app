import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'; 
import WorldClock from './WorldClock';
import WeatherApp from './WeatherApp';

class ClockPage extends Component {
    constructor(props) {
        super(props);

    }
    
    render () {
       
        return (

          <div className = "row">
          <div className = "col-offset- 2 col-md-12" id = "clockPage" style={{paddingLeft: '225px'}}>
            <WorldClock clockClass="myClockPage" city = {this.props.match.params.city} />
            <WeatherApp city = {this.props.match.params.city} />
          </div>
          </div>
        );
    }
}

export default ClockPage;