import React from 'react';
import JobForm from '../jobForm';
import TruckForm from '../truckForm';
import './landing.css';

const Landing = () => {
  return (
    <div>
      <div className="landing-grid">
        <div className="landing-image-container" />
        <button>BOOK NOW</button>
        <div className="booking-container" />
        <div className="landing-info">
          <p> Electric Bike Rental</p>
          <p>Book by hour, day or week</p>
          <i className="fa fa-bicycle" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
