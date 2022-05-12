import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [date, setDate] = useState(new Date());
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const itemChangeHandler = (event) => {
    setItem(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };
const submitHandler = (event)=>{
  event.preventDefault();
  const expenseDataExport = {
    exportDate: new Date(date),
    exportItem: item,
    exportPrice: price
  }
  console.log(expenseDataExport)
  setDate("");
  setItem("");
  setPrice("")
}
  return (
    <form className="expense-form_form" onSubmit={submitHandler}>
      <div className="expense-form_input">
        <div className="expense-form_entry">
          <label>Date: </label>
          <input
            onChange={dateChangeHandler}
            value={date}
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            id="date"
            name="date"
          />
        </div>

        <div className="expense-form_entry">
          <label>Item: </label>

          <input
            onChange={itemChangeHandler}
            value={item}
            type="text"
            id="item"
            name="item"
          />
        </div>

        <div className="expense-form_entry">
          <label>Price: </label>
          <input
            onChange={priceChangeHandler}
            value={price}
            type="number"
            id="price"
            pattern="[0-9]+"
            min="0.01"
            step="0.01"
            name="price"
          />
        </div>
      </div>
      <div className="expense-form_button">
        <button type="submit">Add item</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
