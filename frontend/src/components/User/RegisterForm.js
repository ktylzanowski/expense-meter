import "./LoginForm.css";
import Card from "../UI/Card";
import React, { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

const RegisterForm = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const loginHandler = (event) => {
    setLogin(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const password2Handler = (event) => {
    setPassword2(event.target.value);
  };

  let { loginUser } = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    if (password !== password2) {
      setError("The passwords are not identical.");
    }
    const userDate = {
      email: login,
      password: password,
      password2: password2,
    };
    axios
      .post("http://localhost:8000/api/register", userDate, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        loginUser(event);
        if (response.data.messages){
          response.data.messages.forEach((message) =>{
            console.log(message)
          })
        }
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          const emailError = error.response.data.email
            ? error.response.data.email[0]
            : false;
          const passwordError = error.response.data.password
            ? error.response.data.password[0]
            : false;
          const errorMessage =
            emailError || passwordError || "Incorrect email and password";
          setError(errorMessage);
        } else {
          setError("An error occurred during registration.");
        }
      });
  };

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
              <input
                type="text"
                name="username"
                onChange={loginHandler}
              ></input>
            </div>
            <div className="login-form__control">
              <label>password</label>
              <input
                type="password"
                onChange={passwordHandler}
                name="password"
              ></input>
            </div>
            <div className="login-form__control">
              <label>repeat password</label>
              <input type="password" onChange={password2Handler}></input>
            </div>
            <div className="login-form__buttons">
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit">Register</button>
            </div>
          </div>
          {error && <div className="login-form__error">{error}</div>}
        </Card>
      </form>
    </div>
  );
};

export default RegisterForm;
