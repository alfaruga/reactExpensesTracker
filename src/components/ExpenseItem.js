import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card"

function ExpenseItem(props) {

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item_description">
        <h2>{props.item}</h2>
        <div className="expense-item_price">${props.price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
