import React, { Component } from 'react';
import WorldClock from './WorldClock';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ClockPage from './ClockPage';
import MyApp from './MyApp';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={MyApp} />
                        <Route path="/WorldClock/:city" component={ClockPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;