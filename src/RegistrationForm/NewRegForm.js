import React, { Component } from "react";
import styles from "../EmpLogin/styles.module.css";
var text_arr = [];

class NewRegForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tec_java: "",

      techs: [],
      techsError: "",
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
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleTechs = this.handleTechs.bind(this);
    //     this.checkboxChange = this.checkboxChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
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

  handleChange(event) {
    this.setState({ gender: event.target.value });
    this.setState({ genderError: "" });
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSelectChange(event) {
    this.setState({ desg: event.target.value });
    this.setState({ desgError: "" });
  }

  handleNameChange(event) {
    this.setState({ ename: event.target.value });
    this.setState({ enameError: "" });
  }

  handleIdChange(event) {
    this.setState({ id: event.target.value });
    this.setState({ idError: "" });
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

  render() {
    return (
      <div className="regform">
        <form onSubmit={this.handleSubmit} action="/action_page.php">
          <div className="div">
            <h2>Employee Registration Portal</h2>
          </div>
          {/* employee name */}
          <div className="div">
            <label>Employee name</label>
          </div>

          <div className="div">
            <input
              type="text"
              name="ename"
              onChange={this.handleNameChange}
              value={this.state.ename}
              placeholder="Enter Employee name"
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
              onChange={this.handleIdChange}
              placeholder="Enter Employee ID"
              className="empid"
            />
          </div>
          <span style={{ fontSize: 12, color: "red" }}>
            <b>{this.state.idError}</b>
          </span>

          {/* employee desg */}
          <div className="div">
            <label>Select your Designation : </label>

            <select
              value={this.state.desg}
              name="desg"
              onChange={this.handleSelectChange}
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
              //       checked={this.state.selectedOption === "male"}
              onChange={this.handleChange}
            />
            Male
            <input
              type="radio"
              id="female"
              //       checked={this.state.selectedOption === "female"}
              onChange={this.handleChange}
              name="gender"
              value="female"
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
              name="text"
              value={this.state.value}
              onChange={this.handleTextChange}
            />
          </div>

          <div className="div">
            <input type="submit" value="Submit" />
            <input type="reset" onClick={this.reset} value="clear" />
          </div>
        </form>
      </div>
    );
  }
}

export default NewRegForm;
