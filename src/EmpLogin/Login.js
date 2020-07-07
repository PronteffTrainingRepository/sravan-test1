import React, { Component } from "react";
import "../EmpLogin/styles.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empid: "",
      empidError: "",
      password: "",
      passwordError: "",
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    //     this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(date) {
    this.setState({
      selectedDate: date,
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    if (event.target.name === "empid") {
      this.setState({ empidError: "" });
    }
    if (event.target.name === "password") {
      this.setState({ passwordError: "" });
    }
  }

  validate = () => {
    let empidError = "";
    let passwordError = "";

    if (!this.state.empid) {
      empidError = "PF Number is required!";
    }

    if (!this.state.password) {
      passwordError = "Password is required!";
    }

    if (empidError || passwordError) {
      this.setState({ empidError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      alert(this.state.empid, this.state.password);
    } else {
      alert("message");
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} action="/action_page.php">
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
              onChange={this.handleChange}
              placeholder="Enter Employee ID"
              className="empid"
            />
          </div>
          <span style={{ fontSize: 12, color: "red" }}>
            <b>{this.state.empidError}</b>
          </span>

          <div className="div">
            <label>Password</label>
          </div>

          <div className="div">
            <input
              type="password"
              name="Pwd"
              onChange={this.handleChange}
              value={this.state.value}
              placeholder="Enter Password"
              className="pwd"
            />
          </div>
          <span style={{ fontSize: 12, color: "red" }}>
            <b>{this.state.passwordError}</b>
          </span>

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
