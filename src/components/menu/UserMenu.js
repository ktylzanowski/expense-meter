import LogReg from "../User/LogReg";
import LoginForm from "../User/LoginForm";
import RegisterForm from "../User/RegisterForm";
import React, { useState } from "react";

const UserMenu = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

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
    </div>
  );
};
export default UserMenu;
