import React, { Component } from "react";
import styles from "../EmpLogin/styles.module.css";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desg: "",
      text: "",
      ename: "",
      id: "",
      gender: "",
      techs: "",
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var ary = ["three", "seven", "eleven"];

    ary.remove("seven");
    this.setState({
      [event.target.name]: event.target.value,
    });
    if (event.target.name === "ename") {
      this.setState({ ename: event.target.value });
    }
    if (event.target.name === "empid") {
      this.setState({ id: event.target.value });
    }
    if (event.target.name === "text") {
      this.setState({ text: event.target.value });
    }
    if (event.target.name === "desg") {
      this.setState({ desg: event.target.value });
    }
    if (event.target.name === "gender") {
      this.setState({ gender: event.target.value });
    }
  }

  handleSubmit(event) {
    alert(
      `Employee name is ${this.state.ename} Id number ${this.state.id} Designatation is ${this.state.desg} and Discription is ${this.state.text} gender ${this.state.gender}`
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className={styles.regform}>
        <form onSubmit={this.handleSubmit} action="/action_page.php">
          <div className="div">
            <h2>Employee Registration Portal</h2>
          </div>
          {/* employee name */}
          <div className="div">
            <label>Employee Name</label>
          </div>

          <div className="div">
            <input
              type="text"
              name="ename"
              onChange={this.handleChange}
              value={this.state.ename}
              placeholder="Enter Employee Name"
              className="ename"
            />
          </div>

          {/* employee ID */}
          <div className="div">
            <label>Employee ID</label>
          </div>

          <div className="div">
            <input
              type="number"
              value={this.state.empid}
              name="empid"
              onChange={this.handleChange}
              placeholder="Enter Employee ID"
              className="empid"
            />
          </div>

          {/* employee Designatation */}
          <div className="div">
            <label>Select your Designation : </label>

            <select
              name="desg"
              value={this.state.desg}
              onChange={this.handleChange}
            >
              <option value="null" selected>
                select Designation
              </option>
              <option value="Developer">Developer</option>
              <option value="Networking">Networking</option>
            </select>
          </div>

          {/* employee Radio */}
          <div className="div">
            <label>Gender : </label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={this.handleChange}
            />
            Male
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={this.handleChange}
            />
            Female
          </div>

          {/* employee Checkbox */}
          <div className="div">
            <label> Known Technologies :</label>
            <input
              type="checkbox"
              name="techs"
              value="Node"
              onChange={this.handleChange}
            />
            Node
            <input
              type="checkbox"
              name="techs"
              value="ReactJS"
              onChange={this.handleChange}
            />
            ReactJS
            <input
              type="checkbox"
              name="techs"
              value="ReactNative"
              onChange={this.handleChange}
            />
            React Native
          </div>

          {/* employee TextArea */}
          <div>
            <label>Discrpition</label>
          </div>
          <div className="div">
            <textarea
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </div>

          <div className="div">
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
          </div>
        </form>
      </div>
    );
  }
}

export default Registration;
