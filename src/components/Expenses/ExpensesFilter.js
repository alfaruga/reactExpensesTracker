import './ExpensesFilter.css'

const ExpensesFilter = (props) => {
  const dropHandler = (event) => {
    props.onFiltered(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <label for="years" className="expenses-filter__control">
        Pick a year:
      </label>
      <select
        onChange={dropHandler}
        name="years"
        className="expensesFilter_select"
      >
        <option value="">All</option>

        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
