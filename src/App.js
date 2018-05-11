import React, { Component } from 'react';
import JobForm from './components/jobForm';
import TruckForm from './components/truckForm';
import JobList from './components/jobList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TruckForm />
        <JobForm />
        <JobList />
      </div>
    );
  }
}

export default App;
