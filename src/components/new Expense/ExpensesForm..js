
import { useState } from 'react';
import './ExpenseForm.css';
function ExpenseForm(props){
    const [enteredname, setEnteredname]= useState('')
    const [enteredAmount, setEnteredAmount]= useState('')
    const [enteredDate, setEnteredDate]= useState('')
    function nameChangeHandler(event){
        setEnteredname(event.target.value);
    }
    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
    }
    function amountChangeHandler(event){
        setEnteredAmount(event.target.value);
    }
    function submitHandler(event){
        event.preventDefault();
        const expenseData = {
            name: enteredname,
            cost: +enteredAmount,
            date: new Date(enteredDate)
        };
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredname('');
        props.onSaveExpenseData(expenseData);
        
    };
    return(<form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control label input'>
                <label>Title</label>
                <input type='text' onChange={nameChangeHandler} />
            </div>
            <div className='new-expense__control label input'>
                <label>Amount</label>
                <input type='number' min="1"step="1" onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control label input'>
                <label>date</label>
                <input type='date' min="2019-01-01" onChange={dateChangeHandler}  />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.stopbutton} >Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
        </form>
    )
}
export default ExpenseForm;