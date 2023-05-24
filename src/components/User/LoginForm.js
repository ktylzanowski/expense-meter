import React, { useContext } from "react";
import "./LoginForm.css";
import Card from "../UI/Card";
import AuthContext from "../../context/AuthContext";

const LoginForm = (props) => {
  const handleCancel = () => {
    props.onCancel();
  };

  let { loginUser } = useContext(AuthContext);

  return (
    <div>
      <form onSubmit={loginUser}>
        <Card className="login-form">
          <div className="login-form__controls">
            <div className="login-form__control">
              <label>Login</label>
              <input type="text" name="username"></input>
            </div>
            <div className="login-form__control">
              <label>password</label>
              <input type="password" name="password"></input>
            </div>
            <div className="login-form__buttons">
              <button onClick={handleCancel}>Cancel</button>
              <button type="submit">Log in</button>
            </div>
          </div>
        </Card>
      </form>
    </div>
  );
};

export default LoginForm;
