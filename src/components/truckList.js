import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Truck from './truck';
import { mapJobsToTrucks, mapTrucks } from '../utils/helpers';
import axios from 'axios';

class TruckList extends Component {
  constructor() {
    super();

    this.state = {
      mappedJobs: {},
      mappedTrucks: {}
    };
  }

  displayEachTrucksJobs = (mappedJobs, mappedTrucks) => {
    return Object.keys(mappedJobs).map(truck_id => {
      return (
        <Truck
          key={truck_id}
          truckName={mappedTrucks[truck_id]}
          jobObjects={mappedJobs[truck_id]}
        />
      );
    });
  };
  componentWillMount() {
    axios
      .get('https://fathomless-mountain-28837.herokuapp.com/api/jobs')
      .then(jobs => {
        let mappedJobs = mapJobsToTrucks(jobs);
        this.setState({ mappedJobs });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get('https://fathomless-mountain-28837.herokuapp.com/api/trucks')
      .then(trucks => {
        let mappedTrucks = mapTrucks(trucks);
        this.setState({ mappedTrucks });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let { mappedJobs, mappedTrucks } = this.state;

    return (
      <div style={divStyle}>
        <Link to="/">
          <button>Create New Job</button>
        </Link>
        <h1>Trucks</h1>
        {this.displayEachTrucksJobs(mappedJobs, mappedTrucks)}
      </div>
    );
  }
}

const divStyle = {
  marginLeft: '2%',
  marginTop: '2%',
  maxWidth: '50%',
  border: '5px solid black',
  textAlign: 'center',
  paddingBottom: '2%'
};

export default TruckList;
