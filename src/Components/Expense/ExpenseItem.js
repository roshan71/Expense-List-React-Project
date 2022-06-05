import "./ExpenseItem.css";
import Card from "../UI/Card";
import Date from "./date";
function ExpenseItem(props) {
  const edate = props.date;
  const srv=props.title;
  const price = props.price;

  function Handle() {
   console.log("In ExpenseITem");
  }
  return (
    <li>
    <Card className="expense-item">
      <Date edate={edate}></Date>
      <div className="expense-item__description">
        <h2>{srv}</h2>
        <div className="expense-item__price">${price}</div>
      </div>
      <button onClick={Handle}>Alert</button>
    </Card>
    </li>
  );
}
export default ExpenseItem;
