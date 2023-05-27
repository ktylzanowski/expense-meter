import LoginForm from "../User/LoginForm";
import RegisterForm from "../User/RegisterForm";
import React, { useState, useContext } from "react";
import "./UserMenu.css";
import AuthContext from "../../context/AuthContext";
import "../NewExpense/NewExpense.css";

const UserMenu = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  let { succes } = useContext(AuthContext);

  const handleLogin = () => {
    setIsLogIn(true);
  };

  const handleRegister = () => {
    setIsRegister(true);
  };

  const handleCancel = () => {
    setIsLogIn(false);
    setIsRegister(false);
  };

  return (
    <div>
      {!isLogIn ? (
        isRegister ? (
          <RegisterForm onCancel={handleCancel} />
        ) : (
          <div className="new-expense">
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
          </div>
        )
      ) : (
        <LoginForm onCancel={handleCancel} />
      )}
      {succes && <p className="message">{succes}</p>}
    </div>
  );
};
export default UserMenu;
