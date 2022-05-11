import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const expenses = function Expenses(props) {
  var expData = props.expensesData;
  let expensesArray = [];

  for (let i = 0; i < expData.length; i++) {
    expensesArray.push(
      <ExpenseItem
        key={expData[i].id}
        item={expData[i]["title"]}
        price={expData[i]["amount"]}
        date={expData[i]["date"]}
      />
    );
  }
  return <div className="expenses"> {expensesArray}</div>;
};

export default expenses;
