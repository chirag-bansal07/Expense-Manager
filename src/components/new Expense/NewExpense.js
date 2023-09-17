import { useState } from "react";
import ExpenseForm from "./ExpensesForm.";
import './NewExpense.css';
function NewExpense(props){
    const[display, setdisplay]=useState(false)
    function show(){
       setdisplay(true);
    }
    function notshow(){
        setdisplay(false);
    }
    if(display===true){
        return (<div className="new-expense">
            <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} stopbutton={notshow}  />
            </div>)
    }
    function SaveExpenseDataHandler(enteredExpenseData){
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        setdisplay(false);
        props.NewExpenseRecived(expenseData);
    };
    
    return(<div className="new-expense">
        <button onClick={show}>Add New Expense</button>
    </div>)

}
export default NewExpense;