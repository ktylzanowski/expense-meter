import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  let {logoutUser} = useContext(AuthContext)

  return (
    <div className="new-expense">
      {!isEditing && (
        <>
          <button onClick={logoutUser}>Logout</button>
          <button onClick={startEditingHandler}>Add new expense</button>
        </>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={SaveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
