import React, { useState } from "react";

function ExpenseForm(props) {
  const [addTitle, getTitle] = useState("");
  const TitleHandler = (event) => {
    getTitle(event.target.value);
    console.log(event.target.value);
  };
  const [addPrice, getPrice] = useState("");
  const PriceHandler = (event) => {
    getPrice(event.target.value);
    console.log(event.target.value);
  };
  const [addDate, getDate] = useState("");
  const DateHandler = (event) => {
    getDate(event.target.value);
    console.log(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();

    const NewData = {
      title: addTitle,
      price: addPrice,
      date: new Date(addDate),
    };

    props.onSaveData(NewData);
    getTitle("");
    getDate("");
    getPrice("");
  };
 
  return (
    <form onSubmit={SubmitHandler}>
      <div className="EFContainer">
        <div className="FContainer">
          <label>Title</label>
          <input type="text" value={addTitle} onChange={TitleHandler}></input>
        </div>

        <div className="FContainer">
          <label>Cost</label>
          <input
            type="Number"
            value={addPrice}
            min="0.01"
            step="0.01"
            onChange={PriceHandler}
          ></input>
        </div>

        <div className="FContainer">
          <label>Date</label>
          <input
            type="date"
            value={addDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={DateHandler}
          ></input>
        </div>
        
        <div className="Action">
           <button type='button' onClick={props.onCancel} >Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
