import { useState } from "react";
import'./App.css';
import Expense from "./components/expenses/Expenses";
import NewExpense from "./components/new Expense/NewExpense";
const DummyExpenses=[
  {name:"carFinance",cost:20000,date: new Date(2020, 7, 25),id: 1},
  {name: 'education',cost:300000,date: new Date(2020, 7, 15),id: 2},
  {name: 'food',cost:2000,date: new Date(2020, 7, 19),id: 3}]
function App() {
  const [Expenses, setExpense]=useState(DummyExpenses)
  function NewExpenseReciverHandler(newExpenseData) {
    setExpense((prevExpences) => {
      return [newExpenseData, ...prevExpences];
    });
  }
  return (
    <div className="App">
      <h1>Expenses Manager</h1>
      <NewExpense NewExpenseRecived={NewExpenseReciverHandler}/>
      <Expense items={Expenses} />
    </div>
  );
}

export default App;
