import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { timeOptions } from '../utils/helpers';
import axios from 'axios';

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

class JobForm extends Component {
  constructor() {
    super();

    this.state = {
      formFields: { name: '', date: '', startTime: 7, totalHours: '' },
      redirect: false
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
        'https://fathomless-mountain-28837.herokuapp.com/api/jobCreate',
        this.state.formFields
      )
      .then(() => this.setState({ redirect: true }))
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/truckList" />;
    }
    return (
      <div>
        <div style={divStyle}>
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
                type="text"
                name="date"
                placeholder="2017-11-28"
                onChange={this.inputChangeHandler}
                value={this.state.formFields.date}
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

export default JobForm;
