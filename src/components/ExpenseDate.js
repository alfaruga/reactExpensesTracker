import "./ExpenseDate.css";
import Card from "./Card";
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-us", { day: "numeric" });
  return (
    <Card className="expense-date">
      <div className="expense-date_month">{month}</div>
      <div className="expense-date_year">{year}</div>
      <div className="expense-date_day">{day}</div>
    </Card>
  );
}

export default ExpenseDate;
