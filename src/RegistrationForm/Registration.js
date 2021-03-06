import React, { Component } from "react";
import styles from "../EmpLogin/styles.module.css";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ename: "",
      id: "",
      desg: "",
      gender: "",
      text: "",
      enameError: "",
      idError: "",
      desgError: "",
      genderError: "",
      textError: "",
      techs: "",
      techsError: "",
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    if (event.target.name === "ename") {
      this.setState({ enameError: "" });
    }
    if (event.target.name === "id") {
      this.setState({ idError: "" });
    }
    if (event.target.name === "text") {
      this.setState({ text: event.target.value });
    }
    if (event.target.name === "desg") {
      this.setState({ desgError: "" });
    }
    if (event.target.name === "gender") {
      this.setState({ genderError: "" });
    }
  }

  validate() {
    let enameError = "";
    let idError = "";

    let genderError = "";
    let desgError = "";

    if (!this.state.ename) {
      enameError = "Employee Name  is required!";
    }
    if (!this.state.id) {
      idError = "Employee Id  is required!";
    }
    if (!this.state.desg) {
      desgError = "Employee Designatation is required!";
    }

    if (!this.state.gender) {
      genderError = "Employee Gender  is required!";
    }
    // if (!this.state.text) {
    //   textError = "Discription  is required!";
    // }
    if (idError || enameError || genderError || desgError) {
      this.setState({ idError, enameError, genderError, desgError });
      let err1 = enameError;
      let err2 = idError;
      let err3 = desgError;
      let err4 = genderError;

      if (err1) {
        alert(err1);
      } else if (err2) {
        alert(err2);
      } else if (err3) {
        alert(err3);
      } else if (err4) {
        alert(err4);
      }

      return false;
    }

    return true;
  }

  reset() {
    this.setState({
      ename: "",
      id: "",
      desg: "",
      gender: "",
      text: "",
    });
  }

  handleSubmit(event) {
    const isValid = this.validate();
    if (isValid) {
      alert(
        `hi my name is ${this.state.ename} and id is ${this.state.id} and Designation is ${this.state.desg} gender is ${this.state.gender} and Discription is ${this.state.text}`
      );
    } else {
      console.log(this.event);
    }
    event.preventDefault();
  }

  reset() {
    this.setState({
      ename: "",
      id: "",
      desg: "",
      gender: "",
      text: "",
    });
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
          <span style={{ fontSize: 12, color: "red" }}>
            <b>{this.state.enameError}</b>
          </span>

          {/* employee ID */}
          <div className="div">
            <label>Employee ID</label>
          </div>

          <div className="div">
            <input
              type="number"
              value={this.state.id}
              name="id"
              onChange={this.handleChange}
              placeholder="Enter Employee ID"
              className="id"
            />
          </div>
          <span style={{ fontSize: 12, color: "red" }}>
            <b>{this.state.idError}</b>
          </span>

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
          <span style={{ fontSize: 12, color: "red" }}>
            <b>{this.state.desgError}</b>
          </span>

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
          <span style={{ fontSize: 12, color: "red" }}>
            <b>{this.state.genderError}</b>
          </span>

          {/* employee Checkbox */}
          <div className="div">
            <label> Known Technologies :</label>
            <input
              type="checkbox"
              name="techs"
              value="Node"
              // onChange={this.handleChange}
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
              // onChange={this.handleChange}
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
              placeholder="Write Something........"
              onChange={this.handleChange}
            />
          </div>
          <span style={{ fontSize: 12, color: "red" }}>
            <b>{this.state.textError}</b>
          </span>

          <div className="div">
            <input className="btn-pri" type="submit" value="Submit" />
            <input
              className="btn-warn"
              onClick={this.reset}
              type="reset"
              value="Reset"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Registration;
