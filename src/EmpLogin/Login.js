import React, { Component } from "react";
import "../EmpLogin/styles.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: "",
      emp_id: "",
      pwd: "",
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleEmpidChange = this.handleEmpidChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleDateChange(date) {
    this.setState({
      selectedDate: date,
    });
  }

  handleEmpidChange(event) {
    this.setState({ emp_id: event.target.value }); //setting state seperately
  }
  handlePasswordChange(event) {
    this.setState({ pwd: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    alert(
      `Hi my ID number is ${this.state.emp_id} and my password is ${this.state.pwd} and date of joining is ${this.state.selectedDate}`
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} action="/action_page.php">
          <div className="div">
            <h2>Employee Login Portal</h2>
          </div>

          <div className="div">
            <label>Employee ID</label>
          </div>

          <div className="div">
            <input
              type="number"
              value={this.state.value}
              name="empid"
              onChange={this.handleEmpidChange}
              placeholder="Enter Employee ID"
              className="empid"
            />
          </div>
          <span style={{ fontSize: 12, color: "red" }}>
            <b>{this.state.pfnoError}</b>
          </span>

          <div className="div">
            <label>Password</label>
          </div>

          <div className="div">
            <input
              type="password"
              name="Pwd"
              onChange={this.handlePasswordChange}
              value={this.state.value}
              placeholder="Enter Password"
              className="pwd"
            />
          </div>

          <div className="div">
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
          </div>

          <div className="div">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
