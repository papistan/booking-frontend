import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { timeOptions } from '../utils/helpers';
import axios from 'axios';

const divStyle = {
  marginRight: '2%',

  minWidth: '30%',
  minHeight: '50%',
  border: '5px solid black',
  marginBottom: '2%',
  textAlign: 'center',
  paddingBottom: '10%',
  float: 'right'
};

class TruckForm extends Component {
  constructor() {
    super();

    this.state = {
      formFields: { name: '', startTime: 7, endTime: 20 },
      redirect: false
    };
  }

  inputChangeHandler = e => {
    let formFields = { ...this.state.formFields };
    formFields[e.target.name] = e.target.value;
    console.log(formFields);
    this.setState({
      formFields
    });
  };

  formHandler = e => {
    e.preventDefault();
    axios
      .post(
        'https://fathomless-mountain-28837.herokuapp.com/api/truckCreate',
        this.state.formFields
      )
      .then(() => this.setState({ redirect: true }))
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/truckList" />;
    }
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
              <select onChange={this.inputChangeHandler} name="startTime">
                {Object.keys(timeOptions).map(time => (
                  <option key={timeOptions[time]} value={timeOptions[time]}>
                    {time}
                  </option>
                ))};
              </select>
              <p>End Time (hour)</p>
              <select onChange={this.inputChangeHandler} name="endTime">
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
