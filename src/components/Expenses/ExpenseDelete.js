import "./ExpenseDelete.css";
import axios from "axios";

const ExpenseDelete = (props) => {
  const handleSubmit = async () => {
    const data = { pk: props.pk };
    await axios.post("http://localhost:8000/delete", data).catch((error) => {
      console.error(error);
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <button className="delete-button" type="submit">
        Delete
      </button>
    </form>
  );
};

export default ExpenseDelete;
