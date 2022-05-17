import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState(NaN);

  const filterFunction = (year) => {
    setYear(parseInt(year));
  };

  let  expenses = props.expensesData.filter(item=>(isNaN(year) || item["date"].getFullYear() === year));

  return (
    <div className="expenses">
      <ExpensesFilter onFiltered={filterFunction} />
      <ExpensesChart expenses={expenses} />
      <ExpensesList year={year} expData={props.expensesData} />
    </div>
  );
};

export default Expenses;
