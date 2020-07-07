import React, { Component } from "react";
import "../EmpLogin/styles.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      selectedDate: "",
    };

    //     this.handleDateChange = this.handleDateChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  //   handleDateChange(date) {
  //     this.setState({
  //       selectedDate: date,
  //     });
  //   }

  handleChange(event) {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({
      fields,
    });
  }

  validateOnSubmit(event) {
    event.preventDefault();
    if (this.validateForm()) {
      this.setState({ fields: fields });
      alert("form submitted");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["empid"]) {
      formIsValid = false;
      errors["empid"] = "Please enter Employee ID";
    }
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Please enter Password";
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.validateOnSubmit} action="/action_page.php">
          <div className="div">
            <h2>Employee Login Portal</h2>
          </div>

          <div className="div">
            <label>Employee ID</label>
          </div>

          <div className="div">
            <input
              type="number"
              name="empid"
              onChange={this.handleChange}
              placeholder="Enter Employee ID"
            />
          </div>
          <div>
            <span>{this.state.errors.empid}</span>
          </div>

          <div className="div">
            <label>Password</label>
          </div>

          <div className="div">
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              placeholder="Enter Password"
            />
          </div>
          <div>
            <span>{this.state.errors.password}</span>
          </div>

          {/* <div className="div">
            <label>Date</label>
          </div>

          <div className="div">
            <DatePicker
              selected={this.state.selectedDate}
              onChange={this.handleDateChange}
              name="startDate"
              dateFormat="dd/MM/yyyy"
              isClearable
              scrollableMonthYearDropdown
              showYearDropdown
            />
          </div> */}

          <div className="div">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
