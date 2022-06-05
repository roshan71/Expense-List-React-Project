import Expense from "./Components/Expense/Expense";
import React , {useState} from "react";
import NewExpense from "./Components/NewValue/NewExpense";
const Dummy_Expense = [
  {
    id: "1",
    title: "Bike Wash",
    price: 450,
    date: new Date(2019, 3, 6),
  },
  {
    id: "2",
    title: "Bike Service",
    price: 3330,
    date: new Date(2020, 4, 6),
  },
  {
    id: "3",
    title: "Billing",
    price: 1000,
    date: new Date(2020, 2, 10),
  },
];
function App() {
  const [expense,setExpense]=useState(Dummy_Expense);
  const NewDataHanlder=(NewData)=>
  {
    setExpense((PreExpense)=>{
      return [NewData,...PreExpense];
    });
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddNewData={NewDataHanlder}></NewExpense>
      <Expense expense={expense}></Expense>
    </div>
  );
}

export default App;
