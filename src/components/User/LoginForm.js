import React, { useState } from "react";
import "./LoginForm.css";
import Card from "../UI/Card";

const LoginForm = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const loginHandle = (event) => {
    setLogin(event.target.value);
  };

  const passwordHandle = (event) => {
    setPassword(event.target.value);
  };

  const handleCancel = () => {
    props.onCancel();
  };

  return (
    <div>
      <form>
        <Card className="login-form">
          <div className="login-form__controls">
            <div className="login-form__control">
              <label>Login</label>
              <input type="text" onChange={loginHandle}></input>
            </div>
            <div className="login-form__control">
              <label>password</label>
              <input type="pssword" onChange={passwordHandle}></input>
            </div>
            <div className="login-form__buttons">
              <button onClick={handleCancel}>Cancel</button>
              <button>Log in</button>
            </div>
          </div>
        </Card>
      </form>
    </div>
  );
};

export default LoginForm;
