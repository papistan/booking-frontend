import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Landing from './components/landing/landing';
import TruckList from './components/truckList';
import JobForm from './components/jobForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/truckList" component={TruckList} />
            <Route path="/jobForm" component={JobForm} />
            <Route path="/" component={Landing} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
