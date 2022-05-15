import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  const clickHandler = () => {
console.log("Button Of ExpenseItem fixed")
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item_description">
        <h2>{props.item}</h2>
        <div className="expense-item_price">${props.price}</div>
      </div>
      <button className="expense-item_button" onClick={clickHandler}>
        Change item
      </button>
    </Card>
  );
};

export default ExpenseItem;
