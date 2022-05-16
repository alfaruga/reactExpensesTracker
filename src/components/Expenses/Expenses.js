import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  var expData = props.expensesData;

  const [year, setYear] = useState(NaN);

  const filterFunction = (year) => {
    setYear(parseInt(year));
  };

  const filterByYear = function (item) {
    return isNaN(year) || item["date"].getFullYear() === year;
  };
  let expensesContent = <p>No expenses found</p>;

  if (expData.filter(filterByYear).length > 0) {
    expensesContent = expData
      .filter(filterByYear)
      .map((item) => (
        <ExpenseItem
          key={item["id"]}
          id={item["id"]}
          item={item["item"]}
          price={item["price"]}
          date={item["date"]}
        />
      ));
  }
  return (
    <div className="expenses">
      <ExpensesFilter onFiltered={filterFunction} />
      <div>{expensesContent}</div>
    </div>
  );
};

export default Expenses;
