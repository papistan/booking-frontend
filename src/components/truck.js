import React from 'react';

const liStyle = {
  listStyleType: 'none'
};

const Truck = props => {
  let jobObjects = props;

  const listTrucksJobs = jobs => {
    console.log(jobs);
    return jobs.map(job => (
      <li style={liStyle} key={job._id}>
        {' '}
        {job.name}, {new Date(job.date).toDateString()}, starting at{' '}
        {job.startTime}, {job.totalHours} hours{' '}
      </li>
    ));
  };
  return (
    <div>
      <h3>{props.truckName} assignments </h3>
      <ul>{listTrucksJobs(jobObjects.jobObjects)}</ul>
    </div>
  );
};

export default Truck;
