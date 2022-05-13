import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseDataExport) => {
    const expenseData = {
      ...expenseDataExport,
      id: Math.random(),
    };
    props.onAddingNewItem(expenseDataExport);
    console.log(`Hello from [NewExpenses] componenet ${JSON.stringify(expenseData)}`);
  };

  return (
    <div className="newExpense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
