import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseDataExport) => {
    const expenseData = {
      id: Math.random(),
      ...expenseDataExport,
    };
    props.onAddingNewItem(expenseData);
    console.log(`Hello from [NewExpenses] componenet ${JSON.stringify(expenseData)}`);
  };

  return (
    <div className="newExpense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
