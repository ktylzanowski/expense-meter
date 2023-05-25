import "./LoginForm.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import axios from "axios";

const RegisterForm = (props) => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const loginHandler = (event) => {
    setLogin(event.target.value)
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value)
  }

  const password2Handler = (event) => {
    setPassword2(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const userDate = {
      email: login,
      password: password,
    };
    axios.post("http://localhost:8000/api/register", userDate)
    .catch((error) => {
      console.error(error);
    })
    console.log(userDate)
  }

  const handleCancel = () => {
    props.onCancel();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <Card className="login-form">
          <div className="login-form__controls">
            <div className="login-form__control">
              <label>Login</label>
              <input type="text" onChange={loginHandler}></input>
            </div>
            <div className="login-form__control">
              <label>password</label>
              <input type="password" onChange={passwordHandler}></input>
            </div>
            <div className="login-form__control">
              <label>repeat password</label>
              <input type="password" onChange={password2Handler}></input>
            </div>
            <div className="login-form__buttons">
              <button onClick={handleCancel}>Cancel</button>
              <button>Register</button>
            </div>
          </div>
        </Card>
      </form>
    </div>
  );
};

export default RegisterForm;
