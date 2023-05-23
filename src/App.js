import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import LogReg from "./components/User/LogReg";
import LoginForm from "./components/User/LoginForm";
import RegisterForm from "./components/User/RegisterForm";
import axios from "axios";

const App = () => {
  const [details, setDetails] = useState([]);
  const [isLogIn, setIsLogIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000")
      .then((res) => {
        const data = res.data.map((item) => ({
          ...item,
          date: new Date(item.date),
        }));
        setDetails(data);
      })
      .catch((err) => {});
  }, []);

  const addExpenseHandler = (expense) => {
    setDetails((prevDetails) => [expense, ...prevDetails]);
  };

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
          <RegisterForm onCancel={handleCancel}/>
        ) : (
          <LogReg onLogin={handleLogin} onRegister={handleRegister} />
        )
      ) : (
        <LoginForm onCancel={handleCancel} />
      )}

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={details} />
    </div>
  );
};

export default App;
