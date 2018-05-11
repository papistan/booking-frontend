import React, { Component } from 'react';
import axios from 'axios';

const divStyle = {
  marginLeft: '2%',
  minWidth: '70%',
  border: '5px solid black',
  textAlign: 'center',
  paddingBottom: '2%'
};

const mapJobsToTrucks = jobs => {
  let trucksJobs = {};
  Object.keys(jobs.data).forEach(job => {
    if (trucksJobs[job.truck]) {
      trucksJobs[job.truck].push(job);
    } else {
      trucksJobs[job.truck] = [job];
    }
  });
  return trucksJobs;
};

const mapTrucks = trucks => {
  let truckIdToName = {};
  Object.keys(trucks.data).forEach(truck => {
    truckIdToName[truck._id] = truck.name;
  });
  return truckIdToName;
};

const displayEachTrucksJobs = (mappedJobs, mappedTrucks) => {
  return Object.keys(mappedJobs).map(truck => {
    return (
      <div>
        <h6>{mappedTrucks[truck]} assignments </h6>
        {Object.keys(truck).map(job => {
          return <p>{job.name}</p>;
        })}
      </div>
    );
  });
};

class JobList extends Component {
  constructor() {
    super();

    this.state = {
      mappedJobs: {},
      mappedTrucks: {}
    };
  }

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
        <h6>Trucks</h6>
        {displayEachTrucksJobs(mappedJobs, mappedTrucks)}
      </div>
    );
  }
}

export default JobList;
