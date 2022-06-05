import React, { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "../NewValue/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
function Expense(props) {
  const [selectedYear, setYear] = useState("2019");

  const getYear = (year) => {
    setYear(year);
    console.log(year);
  };
  const FilteredExpense = props.expense.filter((x) => {
    return x.date.getFullYear().toString() === selectedYear;
  });
  console.log("expenses"+FilteredExpense)
  return (
    <div>
      <Card className="expense">
        <ExpenseFilter selected={selectedYear} onSelectYear={getYear} />
        <ExpenseChart expenses={FilteredExpense}/>
        <ExpenseList List={FilteredExpense} />
      </Card>
    </div>
  );
}

export default Expense;
