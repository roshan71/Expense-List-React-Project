import './ExpenseForm.css'
import ExpenseForm from './ExpenseForm';

import React , {useState} from 'react';

function NewExpense(props){
    const saveDataHandler=(FormData)=>
    {
        const ExpenseData= {
            ...FormData,
            id:Math.random().toString()
    };
        props.onAddNewData(ExpenseData);
        SetIsEditing(false);
        
    };
    
   
    const [isEditing,SetIsEditing]=useState(false)

    const CancelHandle =(event)=>
    {
        
        SetIsEditing(false);

    };
 

    const startEditingHandler=(event)=>
    {
        
        SetIsEditing(true);
    };
    return( 
        <div className='Container'>
       
          {!isEditing && <button type='button' onClick={startEditingHandler}> Add Expense</button>}
          {isEditing && <ExpenseForm onSaveData={saveDataHandler} onCancel={CancelHandle}/>}
        </div>
    );

}
export default NewExpense;