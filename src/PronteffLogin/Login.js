import React, { Component } from "react";
import styles from "../PronteffLogin/styles.module.css";
import { BsFillPersonFill, BsLockFill } from "react-icons/bs";
import logo from "../PronteffLogin/images/plogo.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empid: "",
      empidError: "",
      password: "",
      passwordError: "",
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
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
      empidError = "Empid  is required!";
    }

    if (!this.state.password) {
      passwordError = "Password is required!";
    }

    if (empidError || passwordError) {
      this.setState({ empidError, passwordError });
      let err = empidError;
      let err1 = passwordError;
      if (err && err1) {
        alert("empid and password is required");
      } else if (err) {
        alert(err);
      } else if (err1) {
        alert(err1);
      }

      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    const isValid = this.validate();
    if (isValid) {
      alert(
        `hi my id is ${this.state.empid} and password is ${this.state.password} `
      );
    } else {
      console.log(this.event);
    }
    // event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} action="/action_page.php">
          <div className={styles.body}>
            <div className={styles.content}>
              <a href="#">
                <img src={logo} />
              </a>
              <div>
                <BsFillPersonFill />
                <input
                  type="number"
                  className="myClass"
                  placeholder="Employee Id"
                  name="empid"
                  id="InputID"
                  value={this.state.empid}
                  onChange={this.handleChange}
                />
              </div>
              <span style={{ fontSize: 12, color: "red" }}>
                <b>{this.state.empidError}</b>
              </span>

              <div className="styles.password">
                <BsLockFill />
                <input
                  type="password"
                  placeholder="Employee Password"
                  name="password"
                  id="PasswordId"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <span style={{ fontSize: 12, color: "red" }}>
                <b>{this.state.passwordError}</b>
              </span>
              <div>
                <button className={styles.submit} type="submit">
                  <b >Login</b>
                </button>
              </div>
              <div>
                <button className={styles.fb}>
                  <FaFacebookF size="20px" style={{ color: "white" }} />
                </button>
                {"       "}
                {"       "}

                <button className={styles.twitter}>
                  <FaTwitter size="20px" style={{ color: "white" }} />
                </button>
              </div>
              <div>
                <br />
                <a href="#" className={styles.link}>
                  Lost Your Password
                </a>
              </div>
              <br />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
