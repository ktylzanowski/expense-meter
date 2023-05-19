import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import User from "./components/User/User";
import axios from "axios";

const App = () => {
  const [details, setDetails] = useState([]);

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

  return (
    <div>
      <User />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={details} />
    </div>
  );
};

export default App;