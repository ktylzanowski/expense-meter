import LogReg from "../User/LogReg";
import LoginForm from "../User/LoginForm";
import RegisterForm from "../User/RegisterForm";
import React, { useState, useContext } from "react";
import './UserMenu.css'
import AuthContext from "../../context/AuthContext";

const UserMenu = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  let {succes} = useContext(AuthContext)

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
          <LogReg onLogin={handleLogin} onRegister={handleRegister} />
        )
      ) : (
        <LoginForm onCancel={handleCancel} />
      )}
      {succes && <p className="message">{succes}</p>}
    </div>
  );
};
export default UserMenu;
