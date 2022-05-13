import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  var expData = props.expensesData;
  let expensesArray = [];
  const [year, setYear] = useState("");

  const filterFunction = (year) => {
    setYear(year);
  };

  for (let i = 0; i < expData.length; i++) {
    if (expData[i]["date"].getFullYear() == year || year === "") {
      expensesArray.push(
        <ExpenseItem
          key={expData[i].id}
          item={expData[i]["item"]}
          price={expData[i]["price"]}
          date={expData[i]["date"]}
        />
      );
    }
  }
  return (
    <div className="expenses">
      <ExpensesFilter onFiltered={filterFunction} />
      <div>{expensesArray}</div>
    </div>
  );
};

export default Expenses;
