import React from 'react';

const liStyle = {
  listStyleType: 'none'
};

const Bike = props => {
  let jobObjects = props;

  const listTrucksJobs = jobs => {
    return jobs.map(job => (
      <li style={liStyle} key={job._id}>
        {' '}
        <h4>
          {new Date(job.date).toDateString()} <i className="fa fa-clock-o" />{' '}
          {job.startTime}
        </h4>
        {job.totalHours} hours <i className="fa fa-user" /> {job.name}
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

export default Bike;
