import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { timeOptions } from '../utils/helpers';
import axios from 'axios';

class JobForm extends Component {
  constructor() {
    super();

    this.state = {
      formFields: { name: '', date: '', startTime: 7, totalHours: '' },
      redirect: false,
      error: ''
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
        'https://fathomless-mountain-28837.herokuapp.com/api/jobCreate',
        this.state.formFields
      )
      .then(res => {
        if (res.data.errors) {
          this.setState({ error: 'All booked up then. Try another time' });
        } else {
          this.setState({ redirect: true });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { redirect, error } = this.state;
    if (redirect) {
      return <Redirect to="/truckList" />;
    }
    return (
      <div>
        <div style={divStyle}>
          <p style={errorStyle}>{error}</p>
          <div>
            <h5>Create Job</h5>
          </div>
          <div>
            <form onSubmit={this.formHandler}>
              <p>Name</p>{' '}
              <input
                type="text"
                name="name"
                placeholder="Name of person"
                onChange={this.inputChangeHandler}
                value={this.state.formFields.name}
              />{' '}
              <br />
              <p>Move Date</p>{' '}
              <input
                type="date"
                name="date"
                placeholder="2017-11-28"
                required
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                onChange={this.inputChangeHandler}
                value={this.state.formFields.date}
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
              <p>Estimated Hours</p>{' '}
              <input
                type="text"
                name="totalHours"
                placeholder="3"
                onChange={this.inputChangeHandler}
                value={this.state.formFields.totalHours}
              />{' '}
              <br />
              <br />
              <input type="submit" value="Add job" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const divStyle = {
  marginLeft: '2%',
  marginTop: '2%',
  width: '30%',
  minHeight: '30%',
  border: '5px solid black',
  marginBottom: '2%',
  textAlign: 'center',
  paddingBottom: '2%'
};

const errorStyle = {
  color: 'red'
};

export default JobForm;
