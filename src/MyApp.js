import React, { Component } from 'react';
import WorldClock from './WorldClock';
import { Link } from 'react-router-dom';

class MyApp extends Component {
  constructor(props) {
    super(props);

  }
    render() {
        return (   
          <div id ="myRow">
          <div className = "row">
   
          <Link to="/WorldClock/Toronto">
            <WorldClock clockClass="myClock-Toronto" city="Toronto" />
          </Link>
          <Link to="/WorldClock/Moscow">
            <WorldClock clockClass="myClock-Moscow" city="Moscow" />
          </Link>
          <Link to="/WorldClock/Tokyo">
            <WorldClock clockClass="myClock-Tokyo" city="Tokyo" />
          </Link>
          </div>
          <div className = "row">
          <Link to="/WorldClock/New York">
            <WorldClock clockClass="myClock-New-York" city="New York" />
          </Link>
          <Link to="/WorldClock/Paris">
            <WorldClock clockClass="myClock-Paris" city="Paris" />
          </Link>
          <Link to="/WorldClock/Bangkok">
            <WorldClock clockClass="myClock-Bangkok" city="Bangkok" />
          </Link>
         
          </div>
          </div>
  
      );
  }
}

export default MyApp;

