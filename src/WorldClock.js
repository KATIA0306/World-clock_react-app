import React, { Component } from 'react';
import Clock from 'react-clock';

const CITIES = {
  'Toronto': '-4',
  'Moscow': '+3',
  'New York': '-5',
  'Paris': '+2',
  'Tokyo': '+9',
  'Bangkok': '+7'
}

function calcTime(offset) {
  var d = new Date();
  var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  var nd = new Date(utc + (3600000 * offset));
  return nd;
}


class WorldClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: calcTime(CITIES[this.props.city]),
    }
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: calcTime(CITIES[this.props.city]) }),
      1000
    );
  }

  render() {
    return (  
      <div>
          <p className="cityName">{this.props.city}</p>
          <Clock className={this.props.clockClass} size="170" hourHandLength="50"
            value={this.state.date}
          />

      </div>
    );
  }
}

export default WorldClock;