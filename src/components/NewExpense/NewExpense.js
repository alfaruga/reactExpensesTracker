import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  return (
    <div className="container">
      <ExpenseForm />
    </div>
  );
};
export default NewExpense;
