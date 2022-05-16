import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {

  const [year, setYear] = useState(NaN);

  const filterFunction = (year) => {
    setYear(parseInt(year));
  };

  
  return (
    <div className="expenses">
      <ExpensesFilter onFiltered={filterFunction} />
      <ExpensesList year={year} expData={props.expensesData}/>
    </div>
  );
};

export default Expenses;
