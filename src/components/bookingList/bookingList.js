import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Truck from '../truck';
import { mapBookingsToBikes, mapTrucks } from '../../utils/helpers';
import axios from 'axios';
import './bookingList.css';

class BookingList extends Component {
  constructor() {
    super();

    this.state = {
      mappedBookings: {},
      mappedBikes: {}
    };
  }

  displayEachBikesBookings = (mappedBookings, mappedBikes) => {
    return Object.keys(mappedBookings).map(bike_id => {
      return (
        <Truck
          key={bike_id}
          truckName={mappedBikes[bike_id]}
          jobObjects={mappedBookings[bike_id]}
        />
      );
    });
  };
  componentWillMount() {
    axios
      .get('https://fathomless-mountain-28837.herokuapp.com/api/jobs')
      .then(bookings => {
        let mappedBookings = mapBookingsToBikes(bookings);
        this.setState({ mappedBookings });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get('https://fathomless-mountain-28837.herokuapp.com/api/trucks')
      .then(bikes => {
        let mappedBikes = mapTrucks(bikes);
        this.setState({ mappedBikes });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let { mappedBookings, mappedBikes } = this.state;

    return (
      <div className="rental-form-container">
        <Link to="/rentalForm">
          <button className="new-booking-button">Create New Booking</button>
        </Link>
        <div className="bookings-list-container">
          <h1>Bookings</h1>
          {mappedBookings === 'undefined' && <h1> Loading</h1>}
          {this.displayEachBikesBookings(mappedBookings, mappedBikes)}
        </div>
      </div>
    );
  }
}

export default BookingList;
