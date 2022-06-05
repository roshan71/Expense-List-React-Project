import React ,{useState} from "react";


const AddButton=()=>{
    const [Add,getState]=useState(<button type='button' onClick={AddHandle}> Add Expense</button>)
    function AddHandle(event){
        event.preventDefault();
        console.log("add");
        getState(<ExpenseForm onSaveData={saveDataHandler}/>)
    }
    return(
        <div>
        {Add}
        </div>
    );

};
export default AddButton;