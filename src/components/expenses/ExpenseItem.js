import './ExpenseItem.css'
import Card from '../UI/card';
import React from 'react';
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props){
    
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2 className='expense-item h2 '>{props.name}</h2>
                <div className='expense-item__price'>{props.cost}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;