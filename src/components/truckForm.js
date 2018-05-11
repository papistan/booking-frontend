import React, { Component } from 'react';
import axios from 'axios';

const timeOptions = {
  '7am': 7,
  '8am': 8,
  '9am': 9,
  '10am': 10,
  '11am': 11,
  '12pm': 12,
  '1pm': 13,
  '2pm': 14,
  '3pm': 15,
  '4pm': 16,
  '5pm': 17,
  '6pm': 18,
  '7pm': 19,
  '8pm': 20
};

const divStyle = {
  marginLeft: '2%',
  maxWidth: '30%',
  border: '5px solid black'
};

class TruckForm extends Component {
  constructor() {
    super();

    this.state = {
      formFields: { name: '', startTime: 7, endTime: 20 }
    };

    this.formHandler = this.formHandler.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.handleStarttimeSelectChange = this.handleStarttimeSelectChange.bind(
      this
    );
    this.handleEndtimeSelectChange = this.handleEndtimeSelectChange.bind(this);
  }

  inputChangeHandler(e) {
    let formFields = { ...this.state.formFields };
    formFields[e.target.name] = e.target.value;
    console.log(formFields);
    this.setState({
      formFields
    });
  }

  handleStarttimeSelectChange(e) {
    let formFields = { ...this.state.formFields };
    formFields.startTime = e.target.value;
    this.setState({
      formFields
    });
  }

  handleEndtimeSelectChange(e) {
    let formFields = { ...this.state.formFields };
    formFields.endTime = e.target.value;
    this.setState({
      formFields
    });
  }

  formHandler(e) {
    e.preventDefault();
    axios
      .post(
        'https://fathomless-mountain-28837.herokuapp.com/api/truckCreate',
        this.state.formFields
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div style={divStyle}>
          <div>
            <h5>Create Truck</h5>
          </div>
          <div>
            <form onSubmit={this.formHandler}>
              <p>Name</p>{' '}
              <input
                type="text"
                name="name"
                placeholder="Truck1"
                onChange={this.inputChangeHandler}
                value={this.state.formFields.name}
              />{' '}
              <br />
              <p>Start Time (hour)</p>
              <select onChange={this.handleStarttimeSelectChange}>
                {Object.keys(timeOptions).map(time => (
                  <option key={timeOptions[time]} value={timeOptions[time]}>
                    {time}
                  </option>
                ))};
              </select>
              <p>End Time (hour)</p>
              <select onChange={this.handleEndtimeSelectChange}>
                {Object.keys(timeOptions).map(time => (
                  <option key={timeOptions[time]} value={timeOptions[time]}>
                    {time}
                  </option>
                ))};
              </select>
              <br />
              <br />
              <input type="submit" value="Create Truck" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TruckForm;
