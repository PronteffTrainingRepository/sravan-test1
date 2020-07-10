import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import Login from "./EmpLogin/Login";
// import LoginValidation from "./EmpLogin/LoginValidation";
// import Login from '../src/EmpLogin/Log'
import Registration from "./RegistrationForm/Registration";
// import RegistrationForm from "./RegistrationForm/RegistrationForm";
import NewRegForm from "./RegistrationForm/NewRegForm";

import dummy from "./RegistrationForm/dummy";

import Login from "./PronteffLogin/Login";


function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <LoginValidation/> */}
      {/* <Login/> */}

      {/* <RegistrationForm /> */}
      {/* <Registration /> */}
      {/* <NewRegForm/> */}
      {/* <dummy/> */}
      <Login />
    </div>
  );
}

export default App;
