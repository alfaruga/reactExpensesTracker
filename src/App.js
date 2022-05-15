import "./App.css";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const placeHolder = [
    {
      id: "e1",
      item: "Toilet Paper",
      price: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", item: "New TV", price: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      item: "Car Insurance",
      price: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      item: "New Desk (Wooden)",
      price: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(placeHolder);

  

  const addingItemHandler = (expenseDataExport) => {
    console.log("Hello from [App] componenet");
    setExpenses((previousState) => [expenseDataExport, ...previousState]);
  };
  return (
    <div className="App">
      <NewExpense id="NewExpense" onAddingNewItem={addingItemHandler} />
      <Expenses
        id="Expenses"
        expensesData={expenses}
        
      />
    </div>
  );
};

export default App;
