import ExpenseItem from "../expenses/ExpenseItem";
import './expenseslist.css';
function ExpensesList(props){
    if (props.List.length === 0){
        return(<h2 className="expenses-list__fallback">NO EXPENSE FOUND</h2>)
        }  
    return(<ul className="expenses-list">
        {props.List.map((expense) => (
        <ExpenseItem
            key={expense.id} 
            name={expense.name}
            date={expense.date}
            cost={expense.cost}
        />
    ))}
        </ul>
    )
}
export default ExpensesList;