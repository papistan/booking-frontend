import React, { Component } from 'react';
import logo from './logo.svg';
import JobForm from './components/jobForm';
import TruckForm from './components/truckForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TruckForm />
        <JobForm />
      </div>
    );
  }
}

export default App;
