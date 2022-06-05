import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';
const ExpenseList =props=>
{
    
    
    if(props.List.length===0){
        return <h2 className="NoExpense">No Expense Found</h2>
    }
    return(
    <ul className="expenses-list">
        {props.List.map((x) => (
           <ExpenseItem key={x.id} title={x.title} price={x.price} date={x.date} />
         ))
          }  </ul>
    )
};

export default ExpenseList;