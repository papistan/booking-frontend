import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Forms from './components/forms';
import TruckList from './components/truckList';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/">
            <button>Back to Forms</button>
          </Link>
          <Switch>
            <Route path="/truckList" component={TruckList} />
            <Route path="/" component={Forms} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
