import React from "react";
import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (expenseDataExport) => {
    const expenseData = {
      id: Math.random(),
      ...expenseDataExport,
    };
    props.onAddingNewItem(expenseData);
  };

  const toggleAddItem = () => {
    setShowForm((previousState) => !previousState);
  };

  let content = (
    <div className="expense-form_form">
      <div className={"expense-form_button expense-form_add"}>
        <button onClick={toggleAddItem} type="reset">
          Add new item
        </button>
      </div>
    </div>
  );

  if (showForm) {
    content = (
      <ExpenseForm
        show={toggleAddItem}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  }
  return <div className="newExpense">{content}</div>;
};
export default NewExpense;
