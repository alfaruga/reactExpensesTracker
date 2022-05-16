import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
  const expData = props.expData;

  const filterByYear = (item) =>
    isNaN(props.year) || item["date"].getFullYear() === props.year;

  if(expData.filter(filterByYear).length===0){
      return(<h2 className="expenses-list_fallback">No expenses found</h2>)
  }

  
  return <ul className="expenses-list">
      {expData
      .filter(filterByYear)
      .map((item) => (
        <ExpenseItem
          key={item["id"]}
          id={item["id"]}
          item={item["item"]}
          price={item["price"]}
          date={item["date"]}
        />
      ))}
  </ul>;
};

export default ExpensesList;
