import React from 'react';
import JobForm from '../jobForm';
import TruckForm from '../truckForm';
import { Link } from 'react-router-dom';
import './landing.css';

const Landing = () => {
  return (
    <div>
      <div className="landing-grid">
        <div className="landing-image-container" />
        <Link id="book-button" to="/truckList">
          <p>BOOK NOW</p>
        </Link>
        <div className="booking-container" />
        <div className="landing-info">
          <p> Electric Bike Rental</p>
          <p>Book by hour, day or week</p>
          <i className="fa fa-bicycle" />
        </div>
        <Link id="calendar-button" to="/truckList">
          <i className="fa fa-calendar cal" />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
