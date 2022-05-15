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
 

  const displayItemsConditionalyFunction = function (item) {
    if (isNaN(year) || item["date"].getFullYear() === year) {
      return (
        <ExpenseItem
          key={item["id"]}
          id={item["id"]}
          item={item["item"]}
          price={item["price"]}
          date={item["date"]}
        />
      );
    }
  };
  let expensesArray = expData.map(displayItemsConditionalyFunction);

  return (
    <div className="expenses">
      <ExpensesFilter onFiltered={filterFunction} />
      <div>{expensesArray}</div>
    </div>
  );
};

export default Expenses;
