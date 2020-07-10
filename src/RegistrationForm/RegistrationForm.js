import React, { Component } from "react";
import styles from "../EmpLogin/styles.module.css";
var text_arr = [];
class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tec_java: "",
      Designatation: "",
      Discription: "",
      Name: "",
      Id: "",
      techs: [],
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleTechs = this.handleTechs.bind(this);
    //     this.checkboxChange = this.checkboxChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(event) {
    this.setState({ Discription: event.target.value });
  }

  handleSelectChange(event) {
    this.setState({ Designatation: event.target.value });
  }

  handleNameChange(event) {
    this.setState({ Name: event.target.value });
  }

  handleIdChange(event) {
    this.setState({ Id: event.target.value });
  }

  handleTechs(event) {
    let check_status = event.target.checked;
    let checked_tech = event.target.value;
    var index = text_arr.indexOf(checked_tech);
    if (check_status) {
      if (index > -1) {
        text_arr.splice(index, 1);
      }
      text_arr.push(checked_tech);
      this.setState({
        techs: text_arr,
      });
    } else {
      var prev_state = this.state.techs;
      if (index > -1) {
        text_arr.splice(index, 1);
      }
      this.setState({
        techs: prev_state,
      });
    }
    console.log(this.state);
  }
  //   checkboxChange(event) {
  //     const target = event.target;
  //     var techs = [];
  //     let value = target.value;
  //     if (target.checked) {
  //       //this.state.Technologies.push(value);
  //     } else {
  //       var index = techs.indexOf(value);
  //       if (index > -1) {
  //         techs.splice(index, 1);
  //       }
  //       //       this.state.Technologies.splice(value, 1);
  //     }
  //     console.log(this.state.Technologies);
  //   }

  handleSubmit(event) {
    alert(
      `Employee name is ${this.state.Name} Id number ${this.state.Id} Designatation is ${this.state.Designatation} and Discription is ${this.state.Discription} ${this.state.techs}`
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className="regform">
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
              onChange={this.handleNameChange}
              value={this.state.value}
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
              value={this.state.value}
              name="empid"
              onChange={this.handleIdChange}
              placeholder="Enter Employee ID"
              className="empid"
            />
          </div>

          {/* employee Designatation */}
          <div className="div">
            <label>Select your Designation : </label>

            <select value={this.state.value} onChange={this.handleSelectChange}>
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
        //       checked={this.state.selectedOption === "male"}
        //       onChange={this.handleRadioChange}
            />
            Male
            <input
              type="radio"
              id="female"
        //       checked={this.state.selectedOption === "female"}
        //       onChange={this.handleRadioChange}
              name="gender"
              value="female"
            />
            Female
          </div>

          {/* employee Checkbox */}
          <div className="div">
            <label> Known Technologies :</label>
            <input
              type="checkbox"
              name="Technologies"
              value="Node"
              onChange={this.handleTechs}
            />
            Node
            <input
              type="checkbox"
              name="Technologies"
              value="ReactJS"
              onChange={this.handleTechs}
            />
            ReactJS
            <input
              type="checkbox"
              name="Technologies"
              onChange={this.handleTechs}
              value="ReactNative"
            />
            React Native
          </div>

          {/* employee TextArea */}
          <div>
            <label>Discrpition</label>
          </div>
          <div className="div">
            <textarea
              value={this.state.value}
              onChange={this.handleTextChange}
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

export default RegistrationForm;
