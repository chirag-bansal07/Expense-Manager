import ExpensesList from '../ExpenseFilter/expenseslist';
import './Expenses.css'
import Card from "../UI/card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import Expenseschart from './Expensechart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          OnFilterListner={filterChangeHandler}
        />
        <Expenseschart expenses={filteredExpenses} />
        <ExpensesList List={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;