import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bike from '../bike';
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
        <Bike
          key={bike_id}
          truckName={mappedBikes[bike_id]}
          jobObjects={mappedBookings[bike_id]}
        />
      );
    });
  };
  componentDidMount() {
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
      <div className="background">
        <div className="rental-form-container">
          <div className="bookings-list-container">
            <h1>Bookings</h1>
            {mappedBookings === 'undefined' && <h1> Loading</h1>}
            {this.displayEachBikesBookings(mappedBookings, mappedBikes)}
          </div>
          <Link to="/rentalForm">
            <p>Create New Booking</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default BookingList;
