import AuthContext from "../../context/AuthContext";
import Expenses from "../Expenses/Expenses";
import NewExpense from "../NewExpense/NewExpense";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";

const ExpensesMenu = () => {
  const [details, setDetails] = useState([]);
  let { authTokens, succes } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("http://localhost:8000", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      })
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
      
      <NewExpense onAddExpense={addExpenseHandler} />
      {succes && <p className="message">{succes}</p>}
      <Expenses items={details} />
    </div>
  );
};

export default ExpensesMenu;
