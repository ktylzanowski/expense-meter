import "./ExpenseItem.css";
import ExpesneDate from "./ExpenseDate";
import Card from "../UI/Card";
import ExpenseDelete from "./ExpenseDelete";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpesneDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
        <ExpenseDelete pk={props.pk} />
      </Card>
    </li>
  );
};

export default ExpenseItem;
